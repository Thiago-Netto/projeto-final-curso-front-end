import { getAllMonsters, createMonstro, deleteMonstro, updateMonstro  }from "./services.js"

window.onload = async () => {
    const monsters = await loadAllMonsters();
    generateElements(monsters);
}

const loadAllMonsters = () => {
    return getAllMonsters();
}

const generateElements = (monsters) => {
    const dataContainer = document.getElementById("todos-monstros");

    const carregarMonstros = () => {
        try {
            monsters.forEach((monstro) => {
                const monstroElement = document.createElement("div");
                monstroElement.innerHTML = `
                    <div>
                        <p>${monstro.name}</p>                       
                    </div>
                `;
                dataContainer.appendChild(monstroElement);
            });
        } catch (error) {
            console.log('Error in carregarMonstros >>>', error);
        }
    };

    const carregarMonstrosPequenos = () => {
        const dataContainerPequenos = document.getElementById("monstrosPequenos");

        try {
            const monstrosPequenos = monsters.filter(monstro => monstro.type === "pequeno");
            monstrosPequenos.forEach((monstro) => {
                const monstroElement = document.createElement("div");
                monstroElement.innerHTML = `
                    <div class="cartao">
                        <img class="cartao-img" src="${monstro.icone}" alt="${monstro.name}">
                        <div class="cartao-conteudo">
                             <h5 class="cartao-nome">${monstro.name}</h5>
                        </div>
                    </div>
                `;
                dataContainerPequenos.appendChild(monstroElement);
            });
        } catch (error) {
            console.log('Error in carregarMonstrosPequenos >>>', error);
        }
    };

    const carregarMonstrosGrandes = () => {
        const dataContainerGrandes = document.getElementById("monstrosGrandes");

        try {
            const monstrosGrandes = monsters.filter(monstro => monstro.type === "grande");
            monstrosGrandes.forEach((monstro) => {
                const monstroElement = document.createElement("div");
                monstroElement.innerHTML = `
                    <div class="cartao">
                        <img class="cartao-img" src="${monstro.icone}" alt="${monstro.name}">
                        <div class="cartao-conteudo">
                             <h5 class="cartao-nome">${monstro.name}</h5>
                        </div>
                    </div>
                `;
                dataContainerGrandes.appendChild(monstroElement);
            });
        } catch (error) {
            console.log('Error in carregarMonstrosGrandes >>>', error);
        }
    };

    carregarMonstros();
    carregarMonstrosPequenos();
    carregarMonstrosGrandes();
};

document.getElementById('btn-create').addEventListener('click', () => {
    const monstro = {
        name : document.getElementById("name-do-monstro").value,
        type : document.getElementById("type-do-monstro").value,
        especie : document.getelementById("especie-do-monstro").value,
        descricao : document.getElementById("descricao-do-monstro").value,
        elementos : document.getElementById("elementos-do-monstro").value,
        aflicoes : document.getElementById("aflicoes-do-monstro").value,
        locais : document.getElementById("locais-do-monstro").value,
        partes : document.getElementById("partes-do-monstro").value,
        resistenciaaflicoes : document.getElementById("resistencia-do-monstro").value,
        lowrank : document.getElementById("recompensa-lr-do-monstro").value,
        highrank : document.getElementById("recompensa-hr-do-monstro").value,
        partesquebraveis : document.getelementById("partes-quebraveis-do-monstro").value,
        icone : document.getelementById("icon-do-monstro").value,
        img : document.getelementById("img-do-monstro").value,
    }
    createMonstro(monstro)
  });

  document.getElementById('btn-delete').addEventListener('click', () => {
    const monstro = { 
        id : document.getElementById("id-do-monstro-dlt").value,
        name : document.getElementById("name-do-monstro-dlt")
   }
   deleteMonstro(monstro)
  });

  document.getElementById('btn-update').addEventListener('click', () => {
    const monstro = {
        id : document.getElementById("id-do-monstro-updt").value,
        name : document.getElementById("name-do-monstro-updt").value,
        type : document.getElementById("type-do-monstro-updt").value,
        especie : document.getelementById("especie-do-monstro-updt").value,
        descricao : document.getElementById("descricao-do-monstro-updt").value,
        elementos : document.getElementById("elementos-do-monstro-updt").value,
        aflicoes : document.getElementById("aflicoes-do-monstro-updt").value,
        locais : document.getElementById("locais-do-monstro-updt").value,
        partes : document.getElementById("partes-do-monstro-updt").value,
        resistenciaaflicoes : document.getElementById("resistencia-do-monstro-updt").value,
        lowrank : document.getElementById("recompensa-lr-do-monstro-updt").value,
        highrank : document.getElementById("recompensa-hr-do-monstro-updt").value,
        partesquebraveis : document.getelementById("partes-quebraveis-do-monstro-updt").value,
        icone : document.getelementById("icon-do-monstro-updt").value,
        img : document.getelementById("img-do-monstro-updt").value,
    }
    updateMonstro(monstro);
  });