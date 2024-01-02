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

  function createBreakbleParts() {
    const breakbleparts = [];
  
    for (let i = 1; i <= 9; i++) {
      const breakblepartSelect = document.getElementById(`breakblepart${i}`);
      const extractSelect = document.getElementById(`extract${i}`);
  
      const breakblepartValue = breakblepartSelect.value;
      const extractValue = extractSelect.value;
  
      if (breakblepartValue && extractValue) {
        const breakblepartObject = {
          id: i,
          breakble: breakblepartValue,
          extract: extractValue
        };
  
        breakbleparts.push(breakblepartObject);
      }
    }
  
    return breakbleparts;
  }
  
  function createAilmentResistances() {
    const ailmentResistances = [];
    const ailmentTypes = ['mount', 'stun', 'blast', 'sleep', 'poison', 'paralysis'];
  
    ailmentTypes.forEach((ailmentType, index) => {
      // Get elements for each ailment type
      const element = document.querySelector(`.ailment-resistance[data-ailment="${ailmentType}"]`);
      const ailmentresistanceSelect = element.querySelector('.ailmentresistance');
      const initialresistanceInput = element.querySelector('.initialresistance');
      const ailmentdecayInput = element.querySelector('.ailmentdecay');
      const ailmentdamageInput = element.querySelector('.ailmentdamage');
      const ailmentdurationInput = element.querySelector('.ailmentduration');
  
      const ailmentresistanceValue = ailmentresistanceSelect.value;
      const initialresistanceValue = initialresistanceInput.value;
      const ailmentdecayValue = ailmentdecayInput.value;
      const ailmentdamageValue = ailmentdamageInput.value;
      const ailmentdurationValue = ailmentdurationInput.value;
  
      const ailmentResistanceObject = {
        id: index + 1,
        ailmentresistance: ailmentresistanceValue,
        initialresistance: initialresistanceValue || null,
        ailmentdecay: ailmentdecayValue || null,
        ailmentdamage: ailmentdamageValue || null,
        ailmentduration: ailmentdurationValue || null,
      };
  
      ailmentResistances.push(ailmentResistanceObject);
    });
  
    return ailmentResistances;
  }

  document.addEventListener('DOMContentLoaded', function() {
    const createMonsterButton = document.getElementById('btn-create');
    const addLowRankRewardButton = document.getElementById('addLowRankReward');
    addLowRankRewardButton.addEventListener('click', function() {
        const lowRankRewardsContainer = document.getElementById('lowRankRewardsContainer');
        const newLowRankReward = lowRankRewardsContainer.firstElementChild.cloneNode(true);
        newLowRankReward.querySelectorAll('input').forEach(input => input.value = '');
        const newRewardId = lowRankRewardsContainer.children.length + 1;
        newLowRankReward.id = `lowRankReward${newRewardId}`;
        newLowRankReward.querySelector('.addRewardMethod').setAttribute('data-reward-id', newRewardId);
        lowRankRewardsContainer.appendChild(newLowRankReward);
        const addRewardMethodButton = newLowRankReward.querySelector('.addRewardMethod');
        addRewardMethodButton.addEventListener('click', function() {
            const rewardId = addRewardMethodButton.getAttribute('data-reward-id');
            addLowRankRewardMethod(rewardId);
        });
    });
    function addLowRankRewardMethod(rewardId) {
        const lowRankRewardContainer = document.getElementById(`lowRankReward${rewardId}`);
        const rewardMethodsContainer = lowRankRewardContainer.querySelector('.low-rank-reward-method');
        const newRewardMethod = rewardMethodsContainer.firstElementChild.cloneNode(true);
        newRewardMethod.querySelectorAll('input').forEach(input => input.value = '');
        const newMethodId = rewardMethodsContainer.children.length + 1;
        newRewardMethod.id = `lowRankRewardMethod${rewardId}_${newMethodId}`;
        rewardMethodsContainer.appendChild(newRewardMethod);
    }
    const addHighRankRewardButton = document.getElementById('addHighRankReward');
    addHighRankRewardButton.addEventListener('click', function() {
        const highRankRewardsContainer = document.getElementById('highRankRewardsContainer');
        const newHighRankReward = highRankRewardsContainer.firstElementChild.cloneNode(true);
        newHighRankReward.querySelectorAll('input').forEach(input => input.value = '');
        const newRewardId = highRankRewardsContainer.children.length + 1;
        newHighRankReward.id = `highRankReward${newRewardId}`;
        newHighRankReward.querySelector('.addRewardMethod').setAttribute('data-reward-id', newRewardId);
        highRankRewardsContainer.appendChild(newHighRankReward);
        const addRewardMethodButton = newHighRankReward.querySelector('.addRewardMethod');
        addRewardMethodButton.addEventListener('click', function() {
            const rewardId = addRewardMethodButton.getAttribute('data-reward-id');
            addHighRankRewardMethod(rewardId);
        });
    });
    function addHighRankRewardMethod(rewardId) {
        const highRankRewardContainer = document.getElementById(`highRankReward${rewardId}`);
        const rewardMethodsContainer = highRankRewardContainer.querySelector('.high-rank-reward-method');
        const newRewardMethod = rewardMethodsContainer.firstElementChild.cloneNode(true);
        newRewardMethod.querySelectorAll('input').forEach(input => input.value = '');
        const newMethodId = rewardMethodsContainer.children.length + 1;
        newRewardMethod.id = `highRankRewardMethod${rewardId}_${newMethodId}`;
        rewardMethodsContainer.appendChild(newRewardMethod);
    }
    // Button to add more Master Rank Rewards
    const addMasterRankRewardButton = document.getElementById('addMasterRankReward');
    addMasterRankRewardButton.addEventListener('click', function() {
        const masterRankRewardsContainer = document.getElementById('masterRankRewardsContainer');
        // Clone the first Master Rank Reward section
        const newMasterRankReward = masterRankRewardsContainer.firstElementChild.cloneNode(true);
        // Reset input values for the new section
        newMasterRankReward.querySelectorAll('input').forEach(input => input.value = '');
        // Update IDs for the new section
        const newRewardId = masterRankRewardsContainer.children.length + 1;
        newMasterRankReward.id = `masterRankReward${newRewardId}`;
        newMasterRankReward.querySelector('.addRewardMethod').setAttribute('data-reward-id', newRewardId);
        // Append the new Master Rank Reward section to the container
        masterRankRewardsContainer.appendChild(newMasterRankReward);
        // Add a click event listener for the new "Add Reward Method" button
        const addRewardMethodButton = newMasterRankReward.querySelector('.addRewardMethod');
        addRewardMethodButton.addEventListener('click', function() {
            const rewardId = addRewardMethodButton.getAttribute('data-reward-id');
            addMasterRankRewardMethod(rewardId);
        });
    });
    // Function to add a new Master Rank Reward Method
    function addMasterRankRewardMethod(rewardId) {
        const masterRankRewardContainer = document.getElementById(`masterRankReward${rewardId}`);
        const rewardMethodsContainer = masterRankRewardContainer.querySelector('.master-rank-reward-method');
        // Clone the first Master Rank Reward Method section
        const newRewardMethod = rewardMethodsContainer.firstElementChild.cloneNode(true);
        // Reset input values for the new section
        newRewardMethod.querySelectorAll('input').forEach(input => input.value = '');
        // Update IDs for the new section
        const newMethodId = rewardMethodsContainer.children.length + 1;
        newRewardMethod.id = `masterRankRewardMethod${rewardId}_${newMethodId}`;
        // Append the new Master Rank Reward Method section to the container
        rewardMethodsContainer.appendChild(newRewardMethod);
    }
    
    createMonsterButton.addEventListener('click', function(event) {
        event.preventDefault();

        const formData = new FormData(monsterForm);
        const monstro = {
            
            breakbleparts: breakbleparts,
            ailmentresistances: ailmentresistances,
            rage: {
                enrageThreshold: formData.get('enrageThreshold'),
                enrageDuration: formData.get('enrageDuration'),
                enrageAttackMod: formData.get('enrageAttackMod'),
                enrageDefenseMod: formData.get('enrageDefenseMod'),
                enrageSpeedMod: formData.get('enrageSpeedMod'),
                exhaustSpeed: formData.get('exhaustSpeed'),
                exhaustDuration: formData.get('exhaustDuration'),
                
            },
            availableat: formData.get('availableat'),
            invader: formData.get('invader'),
            lowrankrewards: createLowRankRewards(formData),
            highrankrewards: createHighRankRewards(formData),
            masterrankrewards: createMasterRankRewards(formData),
            
        };

        formData.forEach((value, key) => {
            if (key === 'icon') {
                monstro.icon = value;
            } else if (key === 'image') {
                monstro.image = value;
            } else if (key === 'enrageThreshold' || key === 'enrageDuration' || key === 'enrageAttackMod' ||
                key === 'enrageDefenseMod' || key === 'enrageSpeedMod' || key === 'exhaustSpeed' || key === 'exhaustDuration') {
                monstro.rage[key] = value;
            } else if (key === 'availableat' || key === 'invader' || key === 'type' || key === 'introduction' || key === 'description') {
                monstro[key] = value;
            } else if (key === 'elements') {
                const elementsRadio = document.querySelector('input[name="elements"]:checked');
                if (elementsRadio) {
                    monstro.elements = elementsRadio.value;
                }
            } else if (key === 'ailments') {
                monstro.ailments = formData.getAll('ailments');
            } else if (key === 'habitats') {
                monstro.habitats = formData.getAll('habitats');
            } else if (key === 'bodyparts') {
                const bodyparts = [];
                const bodyParts = ['head', 'body', 'wings', 'arms', 'legs', 'tail'];
                const damageTypes = ['sever', 'blunt', 'ranged', 'fire', 'water', 'thunder', 'ice', 'dragon', 'stun', 'stamina'];
        
                bodyParts.forEach((bodyPart) => {
                    const bodyPartObj = {
                        bodypart: bodyPart,
                        damages: [],
                    };
        
                    damageTypes.forEach((damageType) => {
                        const damageValue = formData.get(`${bodyPart}${damageType.charAt(0).toUpperCase() + damageType.slice(1)}`);
                        bodyPartObj.damages.push({
                            damage: damageType,
                            value: Number(damageValue),
                        });
                    });
        
                    bodyparts.push(bodyPartObj);
                });
        
                monstro.bodyparts = bodyparts;
            } else if (key === 'breakbleparts') {
                monstro.breakbleparts = createBreakbleParts();
            } else if (key === 'ailmentresistances') {
                monstro.ailmentresistances = createAilmentResistances();
            } else if (key === 'lowrankrewards') {
                monstro.lowrankrewards = createLowRankRewards(formData);
            } else if (key === 'highrankrewards') {
                monstro.highrankrewards = createHighRankRewards(formData);
            } else if (key === 'masterrankrewards') {
                monstro.masterrankrewards = createMasterRankRewards(formData);
            } else {
                monstro[key] = value;
            }
        });
        
        monstro.type = formData.get('type');
        const elementsRadio = document.querySelector('input[name="elements"]:checked');
        if (elementsRadio) {
            monstro.elements = elementsRadio.value;
        };

        const breakblepart = formData.getAll('breakblepart');
        const extract = formData.getAll('extract');
        monstro.breakbleparts = breakblepart.map((part, index) => ({
        breakble: part,
        extract: extract[index],
        }));
    
        const bodyparts = [];

        // Define as partes e os tipos de dano
        const bodyParts = ['head', 'body', 'wings', 'arms', 'legs', 'tail'];
        const damageTypes = ['sever', 'blunt', 'ranged', 'fire', 'water', 'thunder', 'ice', 'dragon', 'stun', 'stamina'];

        bodyParts.forEach((bodyPart) => {
            const bodyPartObj = {
                bodypart: bodyPart,
                damages: [],
            };

            damageTypes.forEach((damageType) => {
            const damageValue = formData.get(`${bodyPart}${damageType.charAt(0).toUpperCase() + damageType.slice(1)}`);
            bodyPartObj.damages.push({
                damage: damageType,
                value: Number(damageValue),
            });
        });

        bodyparts.push(bodyPartObj);
    });
    
    
        monstro.breakblepartss = createBreakbleParts();        
        monstro.bodyparts = bodyparts;


        // Chamando a função para criar monstro
        createNewMonstro(monstro);
        const ailmentresistances = createAilmentResistances();
    });

    function createLowRankRewards(formData) {
        const lowRankRewards = [];

        // Find all elements with the class "low-rank-reward"
        const rewardElements = document.querySelectorAll('.low-rank-reward');

        rewardElements.forEach((rewardElement, index) => {
            const lowRankReward = {
                id: index + 1,
                lowrankreward: rewardElement.querySelector('input[name="lowrankreward"]').value,
                lowrankrewardmethods: createLowRankRewardMethods(rewardElement),
            };

            lowRankRewards.push(lowRankReward);
        });

        return lowRankRewards;
    }

    function createLowRankRewardMethods(rewardElement) {
        const rewardMethods = [];

        // Find all elements with the class "master-rank-reward-method"
        const methodElements = rewardElement.querySelectorAll('.low-rank-reward-method');

        methodElements.forEach((methodElement, index) => {
            const rewardMethod = {
                id: index + 1,
                lowrankrewardmethod: methodElement.querySelector('input[name="lowrankrewardmethod"]').value,
                lowrankrewardchance: methodElement.querySelector('input[name="lowrankrewardchance"]').value,
            };

            rewardMethods.push(rewardMethod);
        });

        return rewardMethods;
    }

    function createHighRankRewards(formData) {
        const highRankRewards = [];

        // Find all elements with the class "master-rank-reward"
        const rewardElements = document.querySelectorAll('.high-rank-reward');

        rewardElements.forEach((rewardElement, index) => {
            const highRankReward = {
                id: index + 1,
                highrankreward: rewardElement.querySelector('input[name="highrankreward"]').value,
                highrankrewardmethods: createMasterRankRewardMethods(rewardElement),
            };

            highRankRewards.push(highRankReward);
        });

        return highRankRewards;
    }
    function createHighRankRewardMethods(rewardElement) {
        const rewardMethods = [];

        // Find all elements with the class "master-rank-reward-method"
        const methodElements = rewardElement.querySelectorAll('.high-rank-reward-method');

        methodElements.forEach((methodElement, index) => {
            const rewardMethod = {
                id: index + 1,
                highrankrewardmethod: methodElement.querySelector('input[name="highrankrewardmethod"]').value,
                highrankrewardchance: methodElement.querySelector('input[name="highrankrewardchance"]').value,
            };

            rewardMethods.push(rewardMethod);
        });

        return rewardMethods;
    }

    function createMasterRankRewards(formData) {
        const masterRankRewards = [];

        // Find all elements with the class "master-rank-reward"
        const rewardElements = document.querySelectorAll('.master-rank-reward');

        rewardElements.forEach((rewardElement, index) => {
            const masterRankReward = {
                id: index + 1,
                masterrankreward: rewardElement.querySelector('input[name="masterrankreward"]').value,
                masterrankrewardmethods: createMasterRankRewardMethods(rewardElement),
            };

            masterRankRewards.push(masterRankReward);
        });

        return masterRankRewards;
    }
    function createMasterRankRewardMethods(rewardElement) {
        const rewardMethods = [];

        // Find all elements with the class "master-rank-reward-method"
        const methodElements = rewardElement.querySelectorAll('.master-rank-reward-method');

        methodElements.forEach((methodElement, index) => {
            const rewardMethod = {
                id: index + 1,
                masterrankrewardmethod: methodElement.querySelector('input[name="masterrankrewardmethod"]').value,
                masterrankrewardchance: methodElement.querySelector('input[name="masterrankrewardchance"]').value,
            };

            rewardMethods.push(rewardMethod);
        });

        return rewardMethods;
    }
    
    async function createNewMonstro(monstro) {
        try {
            await createMonstro(monstro);
            alert('Monster created successfully!');
            // You can add additional logic or redirect to another page if needed
        } catch (error) {
            console.error('Error creating monster:', error);
            alert('Error creating monster. Please try again.');
        }
    }
});