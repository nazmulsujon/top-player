

document.getElementById('cal-per-player').addEventListener('click',function(){
    const costPerPlayer = getInputFieldValue('cost-per-player-field');
    const costPlayerTotal = costPerPlayer * (allFavPlayer.length);
    if(isNaN(costPerPlayer)){
        alert('Please dont keep empty field & put number value!')
        return;
    }
    setTextElementValue('player-cost-total',costPlayerTotal);
})

document.getElementById('cal-total').addEventListener('click',function(){

    const costPlayerTotal = getTextElementValue('player-cost-total');
    const costManager = getInputFieldValue('cost-manager-field');
    const costCoach = getInputFieldValue('cost-coach-field');
    if(isNaN(costPlayerTotal) || isNaN(costManager) || isNaN(costCoach)){
        alert('Please dont keep empty field & put number value!')
        return;
    }   
    const inTotal = costPlayerTotal + costManager + costCoach;
    setTextElementValue('intotal-cost',inTotal);
})