
/****** common function for add favourite player ******/
function addFavouritePlayerByID(playerId){
    const playerNameElement = document.getElementById(playerId);
    const playerName = playerNameElement.innerText;
    return playerName;
}

const allFavPlayer = [];
/****** common function for display top five favourite player ******/
function displayTopFivePlayer(){
    const selectedPlayer = document.getElementById('selected-player');
    selectedPlayer.innerText = '';
    for(let i = 0; i < allFavPlayer.length; i++){
        const player = allFavPlayer[i];
       
        if(allFavPlayer.length <= 5){
                const li = document.createElement('li');
                li.innerText =player;
                selectedPlayer.appendChild(li);            
        }  
                   
    } 
    if(allFavPlayer.length > 5){
        alert('do not select more!')  
    } 
}

/***** common function for disable button after add favroutie player ******/
function disable(btnId){
    for(let i = 0; i < allFavPlayer.length; i++){
        if(allFavPlayer.length <= 5 ){
           const button = document.getElementById(btnId);
           button.disabled = true;
           button.style.backgroundColor = '#6c757d';
        }
    }
}

/***** common function for get input field value by Id******/
function getInputFieldValue(inputId){
    const costingField = document.getElementById(inputId);
    const costingStr = costingField.value;
    const costing = parseFloat(costingStr);
    return costing;
}

/***** common function for get text element value by Id******/
function getTextElementValue(elementId){
    const element = document.getElementById(elementId);
    const costingStr = element.innerText;
    const costing = parseFloat(costingStr);
    return costing;
}

/***** common function for set new value ******/
function setTextElementValue(elementId,newValue){
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}


