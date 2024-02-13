'use strict'

var gBallCurrSize = 100

function onBallClick(){
    const addSize = 50
    const elBall = document.querySelector('.ball')
    elBall.style.height = gBallCurrSize + addSize + 'px'
    elBall.style.width = gBallCurrSize + addSize + 'px'
    gBallCurrSize +=addSize
    elBall.innerText = gBallCurrSize
    
}