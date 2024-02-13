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
}