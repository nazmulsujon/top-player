/*******add Event listener with cal-per-player btn & input validation*******/
document.getElementById('cal-per-player').addEventListener('click',function(){
    const costPerPlayer = getInputFieldValue('cost-per-player-field');
    const costPlayerTotal = costPerPlayer * (allFavPlayer.length);
    if(isNaN(costPerPlayer)){
        alert('Please dont keep empty field & put number value!')
        return;
    }
    else if(costPlayerTotal < 0){
        alert('Please put valid input!')
        return;
    }
    setTextElementValue('player-cost-total',costPlayerTotal);
})

/*******add Event listener with cal-total btn & input validation*******/
document.getElementById('cal-total').addEventListener('click',function(){

    const costPlayerTotal = getTextElementValue('player-cost-total');
    const costManager = getInputFieldValue('cost-manager-field');
    const costCoach = getInputFieldValue('cost-coach-field');
    if(isNaN(costPlayerTotal) || isNaN(costManager) || isNaN(costCoach)){
        alert('Please dont keep empty field & put number value!')
        return;
    }  
    else if(costPlayerTotal < 0 || costManager < 0 || costCoach < 0){
        alert('Please put valid input!');
        return;
    }
    const inTotal = costPlayerTotal + costManager + costCoach;
    setTextElementValue('intotal-cost',inTotal);
})