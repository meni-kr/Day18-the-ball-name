'use strict'

var gBallCurrSize = 100

function onBallClick(){
    const elBall = document.querySelector('.ball')
    const elBallTxt = document.querySelector('.ball-text')
    elBall.style.backgroundColor = getRandomColor()
    if(gBallCurrSize<400){
     const addSize = getRandomInt(20, 60)
    elBall.style.height = gBallCurrSize + addSize + 'px'
    elBall.style.width = gBallCurrSize + addSize + 'px'
    gBallCurrSize +=addSize
    elBallTxt.innerText = gBallCurrSize   
    }else{
        gBallCurrSize = 50
        onBallClick()
    }
    
    
}