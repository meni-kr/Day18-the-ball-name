'use strict'

var gBall1CurrSize = 100
var gBall2CurrSize = 100
const gMaxDiameter = 400


function onBallClick(elBall) {
    const currClass = '.' + elBall.classList[0]
    const elCurrBall = document.querySelector(currClass)
    const elBallTxt = document.querySelector(currClass, 'span')
    const addSize = getRandomInt(20, 60)
    elCurrBall.style.backgroundColor = getRandomColor()

    if (currClass === '.ball') {

        if (gBall1CurrSize + addSize > gMaxDiameter) {
            gBall1CurrSize = 100
            elCurrBall.style.height = gBall1CurrSize + 'px'
            elCurrBall.style.width = gBall1CurrSize + 'px'
            elBallTxt.innerText = gBall1CurrSize
        } else {
            gBall1CurrSize += addSize
            elCurrBall.style.height = gBall1CurrSize + 'px'
            elCurrBall.style.width = gBall1CurrSize + 'px'
            elBallTxt.innerText = gBall1CurrSize
        }

    } else {

        if (gBall2CurrSize + addSize > gMaxDiameter) {
            gBall2CurrSize = 100
            elCurrBall.style.height = gBall2CurrSize + 'px'
            elCurrBall.style.width = gBall2CurrSize + 'px'
            elBallTxt.innerText = gBall1CurrSize
        } else {
            gBall2CurrSize += addSize
            elCurrBall.style.height = gBall2CurrSize + 'px'
            elCurrBall.style.width = gBall2CurrSize + 'px'
            elBallTxt.innerText = gBall2CurrSize
        }
    }
=======
function onBallClick() {
    const elBall = document.querySelector('.ball')
    const elBallTxt = document.querySelector('.ball-text')
    elBall.style.backgroundColor = getRandomColor()
    if (gBallCurrSize < 400) {
        const addSize = getRandomInt(20, 60)
        elBall.style.height = gBallCurrSize + addSize + 'px'
        elBall.style.width = gBallCurrSize + addSize + 'px'
        gBallCurrSize += addSize
        elBallTxt.innerText = gBallCurrSize
    } else {
        gBallCurrSize = 100
        elBall.style.height = gBallCurrSize  + 'px'
        elBall.style.width = gBallCurrSize  + 'px'
       
    }



}