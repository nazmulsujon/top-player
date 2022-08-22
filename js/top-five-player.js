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
       
        if(allFavPlayer.length < 6){
                const li = document.createElement('li');
                li.innerText =player;
                selectedPlayer.appendChild(li);
        }  
                   
    } 
    if(allFavPlayer.length > 5){
        alert('do not select more!')  
    } 
}

function disable(btnId){
    const button = document.getElementById(btnId);
    button.disabled = true;
}

/*******add Event with neymar's button*******/
document.getElementById('btn-neymar').addEventListener('click',function(){
    const playerName = addFavouritePlayerByID('neymar');
    allFavPlayer.push(playerName);
    displayTopFivePlayer();
    disable('btn-neymar');
   
})

/*******add Event with messi's button*******/
document.getElementById('btn-messi').addEventListener('click',function(){
    const playerName = addFavouritePlayerByID('messi');
    allFavPlayer.push(playerName);
    displayTopFivePlayer();
    disable('btn-messi');
})

/*******add Event with marcelo's button*******/
document.getElementById('btn-marcelo').addEventListener('click',function(){
    const playerName = addFavouritePlayerByID('marcelo');
    allFavPlayer.push(playerName);
    displayTopFivePlayer();
    disable('btn-marcelo');
})

/*******add Event with mbappe's button*******/
document.getElementById('btn-mbappe').addEventListener('click',function(){
    const playerName = addFavouritePlayerByID('mbappe');
    allFavPlayer.push(playerName);
    displayTopFivePlayer();
    disable('btn-mbappe');
})
/*******add Event with silva's button*******/
document.getElementById('btn-silva').addEventListener('click',function(){
    const playerName = addFavouritePlayerByID('silva');
    allFavPlayer.push(playerName);
    displayTopFivePlayer();
    disable('btn-silva');
})
/*******add Event with kaka's button*******/
document.getElementById('btn-kaka').addEventListener('click',function(){
    const playerName = addFavouritePlayerByID('kaka');
    allFavPlayer.push(playerName);
    displayTopFivePlayer();
    disable('btn-kaka');
})