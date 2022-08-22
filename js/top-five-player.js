
/*******add Event listener with neymar's button*******/
document.getElementById('btn-neymar').addEventListener('click',function(){
    const playerName = addFavouritePlayerByID('neymar');
    allFavPlayer.push(playerName);
    displayTopFivePlayer();
    disable('btn-neymar');
   
})

/*******add Event listener with messi's button*******/
document.getElementById('btn-messi').addEventListener('click',function(){
    const playerName = addFavouritePlayerByID('messi');
    allFavPlayer.push(playerName);
    displayTopFivePlayer();
    disable('btn-messi');
})

/*******add Event listener with marcelo's button*******/
document.getElementById('btn-marcelo').addEventListener('click',function(){
    const playerName = addFavouritePlayerByID('marcelo');
    allFavPlayer.push(playerName);
    displayTopFivePlayer();
    disable('btn-marcelo');
})

/*******add Event listener with mbappe's button*******/
document.getElementById('btn-mbappe').addEventListener('click',function(){
    const playerName = addFavouritePlayerByID('mbappe');
    allFavPlayer.push(playerName);
    displayTopFivePlayer();
    disable('btn-mbappe');
})
/*******add Event listener with silva's button*******/
document.getElementById('btn-silva').addEventListener('click',function(){
    const playerName = addFavouritePlayerByID('silva');
    allFavPlayer.push(playerName);
    displayTopFivePlayer();
    disable('btn-silva');
})
/*******add Event listener with kaka's button*******/
document.getElementById('btn-kaka').addEventListener('click',function(){
    const playerName = addFavouritePlayerByID('kaka');
    allFavPlayer.push(playerName);
    displayTopFivePlayer();
    disable('btn-kaka');
})