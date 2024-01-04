import { getAllMonsters, createMonstro} from "./services.js";

window.onload = async () => {
    const monstros = await loadAllMonstros();
    generateElements(monstros);
};

const loadAllMonstros = () =>{
    return getAllMonsters();
};

const generateElements = (monstros) =>{
    const dataContainer = document.getElementById("todos-monstros");
    const dataContainerSmall = document.getElementById("monstros-pequenos");
    const dataContainerLarge = document.getElementById("monstros-grandes");

    const loadAll = () =>{
        try {
            monstros.array.forEach(monstro => {
                const monstrosElement = document.createElement('div');
                monstros.innerHTML = `
                <div> <p>${monstro.name}</p> </div
                `;
                dataContainer.appendChild(monstrosElement)
            });
        } catch (error) {
            console.log('Error in carregarMonstros >>>', error)
        }
    };
    const loadAllSmall = () =>{
        try {
            const monstrosSmall = monstros.filter(monstro => monstro.type === "small");
            monstroSmall.forEach((monstro) =>{
                constSmallElement
            })
        } catch (error) {
            
        }
    }
}