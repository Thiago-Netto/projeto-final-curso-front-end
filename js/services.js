import { handleErrors } from "./exceptions.js";

var URL = 'http://localhost:3000/monstros';

export const getAllMonsters= async() =>{
  try { 
    const response = await fetch(URL);
    handleErrors(response);
    return response.json();    
  } catch (error) {
    console.log('Error >>>', error);    
  }
};

export const createMonstro = async (monstro) => {
  fetch ( URL, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(monstro),
  })
  .then((response) => response.json())
  .then((data) => console.log("sucesso: ", data))
  .catch((error) => console.log("Erro: ", error));
};

export const deleteMonstro = async (monstro) => {
  fetch(URL + `/${monstro.id}`, { method: "DELETE" })
  .then((response) => response.json())
  .then((data) => console.log("sucesso: ", data))
  .catch((error) => console.log("Erro: ", error));
};

export const updateMonstro = async (monstro) => {
  fetch(URL + `/${monstro.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(monstro),
  })
    .then((response) => response.json())
    .then((data) => console.log("sucesso: ", data))
    .catch((error) => console.log("Erro: ", error));
};