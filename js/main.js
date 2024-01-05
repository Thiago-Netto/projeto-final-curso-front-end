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
    lastId()
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

document.addEventListener('DOMContentLoaded', () => {
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

    createMonsterButton.addEventListener('click', (event) => {
        event.preventDefault();

        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('create-breakablepart')) {
                createBreakablePart();
            }
            else if (event.target.classList.contains('addLowRankRewardMethod')){
                createLowRankRewardMethod();
            }
            else if (event.target.classList.contains('addLowRankRewardMethodNew')){
                createLowRankRewardMethodNew();
            }
            else if (event.target.classList.contains('addLowRankReward')){
                createLowRankRewardMethod();
            }
            else if (event.target.classList.contains('addHighRankRewardMethod')){
                createHighRankRewardMethod();
            }
            else if (event.target.classList.contains('addHighRankRewardMethodNew')){
                createHighRankRewardMethodNew();
            }
            else if (event.target.classList.contains('addHighRankReward')){
                createHighRankReward();
            }
            else if (event.target.classList.contains('addMasterRankRewardMethod')){
                createMasterRankRewardMethod();
            }
            else if (event.target.classList.contains('addMasterRankRewardMethodNew')){
                createMasterRankRewardMethodNew();
            }
            else if (event.target.classList.contains('addMasterRankReward')){
                createMasterRankReward();
            }
            else if (event.target.id === 'btn-create') {
                createNewMonstro();
            }
        })

        //responsible for Id
        const getLastId = LastId();

        //responsible for name
        const name = document.getElementById('name').value;
        
        //responsible for monster class
        const monsterClass = document.getElementById('monsterclass').value;
        
        //responsible for type
        const type = document.getElementById('type').value;
        
        //responsible for size
        const size = document.getElementById('size').value;
        
        //responsible for health
        const health = document.getElementById('health').value;
        
        //responsible for habitat
        const habitat = Array.from(document.querySelectorAll('input[name="habitats"]:checked')).map(checkbox => checkbox.value);
        
        //responsible for description
        const description = document.getElementById('description').value;
        
        //responsible for elements
        const elements = Array.from(document.querySelectorAll('input[name="elements"]:checked')).map(checkbox => checkbox.value);
        
        //responsible for ailments        
        const ailments = Array.from(document.querySelectorAll('input[name="ailments"]:checked')).map(checkbox => checkbox.value);
        
        //Responsible for body parts
        const bodyParts = [];

        const bodyPartNames = ['head', 'body', 'wings', 'arms', 'legs', 'tail'];

        bodyPartNames.forEach(bodyPartName => {
            const bodyPartObj = {
                bodypart: bodyPartName,
                damages: [],
            };

        const damageTypes = ['sever', 'blunt', 'ranged', 'fire', 'water', 'thunder', 'ice', 'dragon', 'stun', 'stamina'];

            damageTypes.forEach(damageType => {
                const damageValue = document.getElementById(`${bodyPartName}${damageType.charAt(0).toUpperCase() + damageType.slice(1)}`).value;
                bodyPartObj.damages.push({
                damage: damageType,
                value: Number(damageValue),
            });
        });

            bodyParts.push(bodyPartObj);
        }); 

        //responsible for breakable parts
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
        const breakableParts = Array.from(breakablepartContainers).map(container => ({
            breakable: container.querySelector('.breakablepart').value,
            extract: container.querySelector('.extract').value,
        }));
    
        //responsible for ailments resistances
        const ailmentsResistances = Array.from(ailmentsResistancesContainer.getElementsByClassName('ailment-resistance')).map(container => ({
            initialresistance: container.querySelector('.initialresistance').value,
            ailmentdecay: container.querySelector('.ailmentdecay').value,
            ailmentdamage: container.querySelector('.ailmentdamage').value,
            ailmentduration: container.querySelector('.ailmentduration').value,
        }));

        //responsible for rage
        const rageContainer = {
            enragethreshold: document.getElementById('enrageThreshold').value,
            enrageduration: document.getElementById('enrageDuration').value,
            enrageattackmod: document.getElementById('enrageAttackMod').value,
            enragedefensemod: document.getElementById('enrageDefenseMod').value,
            enragespeedmod: document.getElementById('enrageSpeedMod').value,
            exhaustspeed: document.getElementById('exhaustSpeed').value,
            exhaustduration: document.getElementById('exhaustDuration').value,
        };

        //responsible for low rank rewards
        const createLowRankReward = () => {
            const lowRankRewardsContainer = document.getElementById('low-rank-rewards-container');
            //generate unique ID
            const uniqueId = new Date().getTime();
    
            const newLowRankRewardContainer = document.createElement('div');
            newLowRankRewardContainer.classList.add('low-rank-reward');
            newLowRankRewardContainer.innerHTML = `
                <label for="lowrankreward-${uniqueId}">Low Rank Reward</label>
                <input type="text" name="lowrankreward" class="lowrankreward" required>
                
                <div class="low-rank-reward-method-new">
                    <label for="lowrankrewardmethod-${uniqueId}">Low Rank Reward Method</label>
                    <input type="text" name="lowrankrewardmethod" class="lowrankrewardmethod" required>
    
                    <label for="lowrankrewardchance-${uniqueId}">Low Rank Reward Chance</label>
                    <input type="text" name="lowrankrewardchance" class="lowrankrewardchance" required>
                </div>                      
                <button type="button" id="addLowRankRewardMethod-${uniqueId}" class="addLowRankRewardMethodNew" data-reward-id="${uniqueId}">Add Reward Method</button>
            `;
    
            lowRankRewardsContainer.appendChild(newLowRankRewardContainer);                
        }

        const createLowRankRewardMethod = () => {
            const lowRankRewardMethodContainer = document.getElementById('low-rank-reward-method');
            const uniqueId = new Date().getTime(); // Generate a unique ID
    
            const newLowRankRewardMethodContainer = document.createElement('div');
            newLowRankRewardMethodContainer.classList.add('low-rank-reward-method');
            newLowRankRewardMethodContainer.innerHTML = `
                <label for="lowrankrewardmethod-${uniqueId}">Low Rank Reward Method</label>
                <input type="text" name="lowrankrewardmethod" class="lowrankrewardmethod" required>
    
                <label for="lowrankrewardchance-${uniqueId}">Low Rank Reward Chance</label>
                <input type="text" name="lowrankrewardchance" class="lowrankrewardchance" required>
            `;
    
            lowRankRewardMethodContainer.appendChild(newLowRankRewardMethodContainer);
        }
        const createLowRankRewardMethodNew = () => {
            const lowRankRewardMethodContainerNew = document.getElementByClass('low-rank-reward-method-new');
            const uniqueId = new Date().getTime(); // Generate a unique ID
    
            const newLowRankRewardMethodContainer = document.createElement('div');
            newLowRankRewardMethodContainer.classList.add('low-rank-reward-method');
            newLowRankRewardMethodContainer.innerHTML = `
                <label for="lowrankrewardmethod-${uniqueId}">Low Rank Reward Method</label>
                <input type="text" name="lowrankrewardmethod" class="lowrankrewardmethod" required>
    
                <label for="lowrankrewardchance-${uniqueId}">Low Rank Reward Chance</label>
                <input type="text" name="lowrankrewardchance" class="lowrankrewardchance" required>
            `;
    
            lowRankRewardMethodContainerNew.appendChild(newLowRankRewardMethodContainer);
        }

        const lowRankRewardsContainer = document.getElementById('low-rank-rewards-container');
        const lowRankRewards = Array.from(lowRankRewardsContainer.getElementsByClassName('low-rank-reward')).map(container => {
            const rewardContainer = container.querySelector('.low-rank-reward-method','low-rank-reward-method-new');

            return {
                lowrankreward: container.querySelector('.lowrankreward').value,
                lowrankrewardmethod: rewardContainer.querySelector('.lowrankrewardmethod').value,
                lowrankrewardchance: rewardContainer.querySelector('.lowrankrewardchance').value,
            };
        });

        //responsible for high rank rewards
        const createHighRankReward = () => {
            const highRankRewardsContainer = document.getElementById('high-rank-rewards-container');
            //Generate Unique ID
            const uniqueId = new Date().getTime();
    
            const newHighRankRewardContainer = document.createElement('div');
            newHighRankRewardContainer.classList.add('high-rank-reward');
            newHighRankRewardContainer.innerHTML = `
                <label for="highrankreward-${uniqueId}">High Rank Reward</label>
                <input type="text" name="highrankreward" class="highrankreward" required>
                
                <div class="high-rank-reward-method-new">
                    <label for="highrankrewardmethod-${uniqueId}">High Rank Reward Method</label>
                    <input type="text" name="highrankrewardmethod" class="highrankrewardmethod" required>
    
                    <label for="highrankrewardchance-${uniqueId}">High Rank Reward Chance</label>
                    <input type="text" name="highrankrewardchance" class="highrankrewardchance" required>
                </div>                      
                <button type="button" id="addHighRankRewardMethod-${uniqueId}" class="addHighRankRewardMethodNew" data-reward-id="${uniqueId}">Add Reward Method</button>
            `;
    
            highRankRewardsContainer.appendChild(newHighRankRewardContainer);
        }
        const createHighRankRewardMethod = () => {
            const highRankRewardMethodContainers = document.getElementsByClassName('high-rank-reward-method');
            const uniqueId = new Date().getTime();
        
            const newHighRankRewardMethodContainer = document.createElement('div');
            newHighRankRewardMethodContainer.classList.add('high-rank-reward-method');
            newHighRankRewardMethodContainer.innerHTML = `
                <label for="highrankrewardmethod-${uniqueId}">High Rank Reward Method</label>
                <input type="text" name="highrankrewardmethod" class="highrankrewardmethod" required>
        
                <label for="highrankrewardchance-${uniqueId}">High Rank Reward Chance</label>
                <input type="text" name="highrankrewardchance" class="highrankrewardchance" required>
            `;
                    
            highRankRewardMethodContainers.appendChild(newHighRankRewardMethodContainer);                    
        }
        const createHighRankRewardMethodNew = () => {
            const highRankRewardMethodContainersNew = document.getElementsByClassName('high-rank-reward-method-new');
            const uniqueId = new Date().getTime();
        
            const newHighRankRewardMethodContainer = document.createElement('div');
            newHighRankRewardMethodContainer.classList.add('high-rank-reward-method');
            newHighRankRewardMethodContainer.innerHTML = `
                <label for="highrankrewardmethod-${uniqueId}">High Rank Reward Method</label>
                <input type="text" name="highrankrewardmethod" class="highrankrewardmethod" required>
        
                <label for="highrankrewardchance-${uniqueId}">High Rank Reward Chance</label>
                <input type="text" name="highrankrewardchance" class="highrankrewardchance" required>
            `;
                    
            highRankRewardMethodContainersNew.appendChild(newHighRankRewardMethodContainer);                    
        } 
        const highRankRewardsContainer = document.getElementById('high-rank-rewards-container');
        const highRankRewards = Array.from(highRankRewardsContainer.getElementsByClassName('high-rank-reward')).map(container => {
            const rewardContainer = container.querySelector('.high-rank-reward-method');

            return {
                highrankreward: container.querySelector('.highrankreward').value,
                highrankrewardmethod: rewardContainer.querySelector('.highrankrewardmethod').value,
                highrankrewardchance: rewardContainer.querySelector('.highrankrewardchance').value,
            };
        });
        
        //responsible for master rank rewards
        const createMasterRankReward = () => {
            const masterRankRewardsContainer = document.getElementById('master-rank-rewards-container');
            const uniqueId = new Date().getTime();
    
            const newMasterRankRewardContainer = document.createElement('div');
            newMasterRankRewardContainer.classList.add('master-rank-reward');
            newMasterRankRewardContainer.innerHTML = `
                <label for="masterrankreward-${uniqueId}">Master Rank Reward</label>
                <input type="text" name="masterrankreward" class="masterrankreward" required>
                
                <div class="master-rank-reward-method-new">
                    <label for="masterrankrewardmethod-${uniqueId}">Master Rank Reward Method</label>
                    <input type="text" name="masterrankrewardmethod" class="masterrankrewardmethod" required>
    
                    <label for="masterrankrewardchance-${uniqueId}">Master Rank Reward Chance</label>
                    <input type="text" name="masterrankrewardchance" class="masterrankrewardchance" required>
                </div>                      
                <button type="button" id="addMasterRankRewardMethod-${uniqueId}" class="addMasterRewardMethodNew" data-reward-id="${uniqueId}">Add Reward Method</button>
            `;
    
            masterRankRewardsContainer.appendChild(newMasterRankRewardContainer);
        }
        const createMasterRankRewardMethod = () => {
            const masterRankRewardMethodContainers = document.getElementsByClassName('master-rank-reward-method');
            const uniqueId = new Date().getTime();
        
            const newMasterRankRewardMethodContainer = document.createElement('div');
            newMasterRankRewardMethodContainer.classList.add('master-rank-reward-method');
            newMasterRankRewardMethodContainer.innerHTML = `
                <label for="masterrankrewardmethod-${uniqueId}">Master Rank Reward Method</label>
                <input type="text" name="masterrankrewardmethod" class="masterrankrewardmethod" required>
        
                <label for="masterrankrewardchance-${uniqueId}">Master Rank Reward Chance</label>
                <input type="text" name="masterrankrewardchance" class="masterrankrewardchance" required>
            `;
                    
            masterRankRewardMethodContainers.appendChild(newMasterRankRewardMethodContainer);
        }
        const createMasterRankRewardMethodNew = () => {
            const masterRankRewardMethodContainersNew = document.getElementsByClassName('master-rank-reward-method-new');
            const uniqueId = new Date().getTime();
        
            const newMasterRankRewardMethodContainer = document.createElement('div');
            newMasterRankRewardMethodContainer.classList.add('master-rank-reward-method');
            newMasterRankRewardMethodContainer.innerHTML = `
                <label for="masterrankrewardmethod-${uniqueId}">Master Rank Reward Method</label>
                <input type="text" name="masterrankrewardmethod" class="masterrankrewardmethod" required>
        
                <label for="masterrankrewardchance-${uniqueId}">Master Rank Reward Chance</label>
                <input type="text" name="masterrankrewardchance" class="masterrankrewardchance" required>
            `;
                    
            masterRankRewardMethodContainersNew.appendChild(newMasterRankRewardMethodContainer);
        }
        const masterRankRewardsContainer = document.getElementById('master-rank-rewards-container');
        const masterRankRewards = Array.from(masterRankRewardsContainer.getElementsByClassName('master-rank-reward')).map(container => {
            const rewardContainer = container.querySelector('.high-rank-reward-method');

            return {
                highrankreward: container.querySelector('.highrankreward').value,
                highrankrewardmethod: rewardContainer.querySelector('.highrankrewardmethod').value,
                highrankrewardchance: rewardContainer.querySelector('.highrankrewardchance').value,
            };
        });

        //responsible for icon
        const icon = document.getElementById('icon').value;

        //responsible for image
        const image = document.getElementById('image').value;

        const monstro = {};

        createNewMonstro(monstro);
    })

})