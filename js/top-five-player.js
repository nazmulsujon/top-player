const allFavPlayer = [];

const selectedPlayer = document.getElementById('selected-player');

function displayTopFivePlayer(){
    for(let i = 0; i <= allFavPlayer.length; i++){
        const player = allFavPlayer[i];
       
    }
}

document.getElementById('btn-neymar').addEventListener('click',function(){
    const playerName = addFavouritePlayerByID('neymar')
    allFavPlayer.push(playerName);
    displayTopFivePlayer();
})

document.getElementById('btn-messi').addEventListener('click',function(){
    const playerName = addFavouritePlayerByID('messi')
    allFavPlayer.push(playerName);  
})