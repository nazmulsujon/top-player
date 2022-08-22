
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




function getInputFieldValue(inputId){
    const costPerPlayerField = document.getElementById(inputId);
    const costPerPlayerStr = costPerPlayerField.value;
    const costPerPlayer = parseFloat(costPerPlayerStr);
    return costPerPlayer;
}