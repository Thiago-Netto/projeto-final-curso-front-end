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
                monstrosElement.innerHTML = `
                <div> <p>${monstro.name}</p> </div
                `;
                dataContainer.appendChild(monstrosElement)
            });
        } catch (error) {
            console.log('Error loading all monsters >>>', error)
        }
    };
    const loadAllSmall = () =>{
        try {
            const monstrosSmall = monstros.filter(monstro => monstro.type === "small");
            monstrosSmall.forEach((monstro) =>{
                const smallElement = document.createElement('div')
                smallElement.innerHTML = `
                    <div class="cartao">
                        <img class="cartao-img" src="${monstro.icon}" alt="${monstro.name}">
                        <div class="cartao-conteudo">
                            <h5 class="cartao-nome">${monstro.name}</h5>
                        </div>
                    </div>                
                `;
                dataContainerSmall.appendChild(smallElement)
            })
        } catch (error) {
            console.log('Error loading all small monsters >>>', error)
        }
    };
    const loadAllLarge = () => {
        try {
            const monstrosLarge = monstros.filter(monstro => monstro.type === "large");
            monstrosLarge.forEach((monstro) =>{
                const largeElement = document.createElement('div')
                largeElement.innerHTML = `
                    <div class="cartao">
                        <img class="cartao-img" src="${monstro.icon}" alt="${monstro.name}">
                        <div class="cartao-conteudo">
                            <h5 class="cartao-nome">${monstro.name}</h5>
                        </div>
                    </div>
                `;
                dataContainerLarge.appendChild(largeElement)
            })
        } catch (error) {
            console.log('Error loading all large monsters >>>', error)
        }
    }

    const lastId = () =>{
        try{
            const lastMonstroIds = data.map(monstro => monstro.id);
            const lastId = Math.max(...lastMonstroIds);
            return lastId;
        } catch (error) {
            console.error('Error fetching highest ID from API:', error);
            throw error;
        }
    }

    loadAll()
    loadAllSmall()
    loadAllLarge()
    lastId
};

const createNewMonstro = async (monstro) => {
    try {
        await createMonstro(monstro);
        alert('Monster created successfully!');
        // You can add additional logic or redirect to another page if needed
    } catch (error) {
        console.error('Error creating monster:', error);
        alert('Error creating monster. Please try again.');
    }
}

document.addEventListener('DOMContentLoaded', function (){
    const createMonsterButton = document.getElementById('btn-create');
    const breakablepartsContainer = document.getElementById('breakableparts-container');
    const ailmentsResistancesContainer = document.getElementById('ailments-resistances-container');
    const addBreakablePartButton = document.getElementById('create-breakablepart');
    const addLowRankRewardButton = document.getElementById('addLowRankReward');
    const addLowRankRewardMethodButton = document.getElementById('addLowRankRewardMethod');
    const addHighRankRewardButton = document.getElementById('addHighRankReward');
    const addHighRankRewardMethodButton = document.getElementById('addHighRankRewardMethod');
    const addMasterRankRewardButton = document.getElementById('addMasterRankReward');
    const addMasterRankRewardMethodButton = document.getElementById('addMasterRankRewardMethod');

    const getLastId = LastId();

    document.addEventListener('click', (event) =>{
        if (event.target.classList.contains('create-breakablepart')) {
            createBreakablePart();
        }
        else if (event.target.classList.contains('addLowRankRewardMethod')){
            createLowRankRewardMethod();
        }
        else if (event.target.classList.contains('addLowRankReward')){
            createLowRankRewardMethod();
        }
        else if (event.target.classList.contains('addHighRankRewardMethod')){
            createHighRankRewardMethod();
        }
        else if (event.target.classList.contains('addHighRankReward')){
            createHighRankReward();
        }
        else if (event.target.classList.contains('addMasterRankRewardMethod')){
            createMasterRankRewardMethod();
        }
        else if (event.target.classList.contains('addMasterRankReward')){
            createMasterRankReward();
        }
        else if (event.target.id === 'btn-create') {
            createNewMonstro();
        }
    })

    const createBreakablePart = () => {
        // Generate a new unique ID from existing
        const uniqueId = new Date().getTime(); 

        const newBreakablePartContainer = document.createElement('div');
        newBreakablePartContainer.classList.add('breakablepart-container');
        newBreakablePartContainer.innerHTML = `
            <label for="breakablepart-${uniqueId}">Breakablepart</label>
            <br>
            <select name="breakablepart-${uniqueId}" class="breakablepart">
                <option value="head">Head</option>
                <option value="body">Body</option>
                <option value="wings">Wings</option>
                <option value="leftwing">Left Wing</option>
                <option value="rightwing">Right Wing</option>
                <option value="arms">Arms</option>
                <option value="leftarm">Left Arm</option>
                <option value="rightarm">Right Arm</option>
                <option value="legs">Legs</option>
                <option value="leftleg">Left Leg</option>
                <option value="rightleg">Right Leg</option>
                <option value="tail">Tail</option>
            </select>
            <label for="extract-${uniqueId}">Extract</label>
            <select name="extract-${uniqueId}" class="extract">
                <option value="green">Green</option>
                <option value="orange">Orange</option>
                <option value="red">Red</option>
                <option value="white">White</option>
            </select>
            <button class="create-breakablepart">Add Breakable Part and Extract</button>
        `;

        breakablepartsContainer.appendChild(newBreakablePartContainer);

        // initializeBreakablePartButton(newBreakablePartContainer);
    }

})