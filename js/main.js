'use strict'

var gBall1CurrSize = 100
var gBall2CurrSize = 100
var gCurrBall1Color = 'darkkhaki'
var gCurrBall2Color = 'rgb(186, 111, 230)'
var gIsBall3Clicked = false
const gMaxDiameter = 400


function onBallClick(elBall) {
    const currClass = '.' + elBall.classList[0]
    const elCurrBall = document.querySelector(currClass)

    const addSize = getRandomInt(20, 60)
    if (currClass === '.ball') {
        gCurrBall1Color = getRandomColor()
        elCurrBall.style.backgroundColor = gCurrBall1Color
    } else {
        gCurrBall2Color = getRandomColor()
        elCurrBall.style.backgroundColor = gCurrBall2Color
    }

    if (currClass === '.ball') {

        if (gBall1CurrSize + addSize > gMaxDiameter) {
            gBall1CurrSize = 100
            changeBallSize(currClass)
        } else {
            gBall1CurrSize += addSize
            changeBallSize(currClass)
        }

    } else {

        if (gBall2CurrSize + addSize > gMaxDiameter) {
            gBall2CurrSize = 100
            changeBallSize(currClass)
        } else {
            gBall2CurrSize += addSize
            changeBallSize(currClass)
        }
    }
}

function changeBallSize(elBallClass) {
    const elCurrBall = document.querySelector(elBallClass)
    if (elBallClass === '.ball') {
        elCurrBall.style.height = gBall1CurrSize + 'px'
        elCurrBall.style.width = gBall1CurrSize + 'px'
        elCurrBall.innerText = gBall1CurrSize
    } else {
        elCurrBall.style.height = gBall2CurrSize + 'px'
        elCurrBall.style.width = gBall2CurrSize + 'px'
        elCurrBall.innerText = gBall2CurrSize
    }
}

function onFourBall() {
    const elBall1 = document.querySelector('.ball')
    const elBall2 = document.querySelector('.ball2')
    const downSize = getRandomInt(20, 60)

    if (gBall1CurrSize - downSize < 100 || gBall2CurrSize - downSize < 100) return

    gBall1CurrSize -= downSize
    gBall2CurrSize -= downSize

    elBall1.style.height = gBall1CurrSize + 'px'
    elBall1.style.width = gBall1CurrSize + 'px'
    elBall1.innerText = gBall1CurrSize

    elBall2.style.height = gBall2CurrSize + 'px'
    elBall2.style.width = gBall2CurrSize + 'px'
    elBall2.innerText = gBall2CurrSize
}

function onThirdBall() {
    const elBall1 = document.querySelector('.ball')
    const elBall2 = document.querySelector('.ball2')
    if (!gIsBall3Clicked) {
        elBall1.style.backgroundColor = gCurrBall2Color
        elBall2.style.backgroundColor = gCurrBall1Color
        switchBall1AndBall2Size()
        gIsBall3Clicked = true
    } else {
        elBall1.style.backgroundColor = gCurrBall1Color
        elBall2.style.backgroundColor = gCurrBall2Color
        switchBall1AndBall2Size()
        gIsBall3Clicked = false
    }
}

function switchBall1AndBall2Size() {
    const elBall1 = document.querySelector('.ball')
    const elBall2 = document.querySelector('.ball2')

    if (!gIsBall3Clicked) {
        elBall1.style.height = gBall2CurrSize + 'px'
        elBall1.style.width = gBall2CurrSize + 'px'
        elBall1.innerText = gBall2CurrSize

        elBall2.style.height = gBall1CurrSize + 'px'
        elBall2.style.width = gBall1CurrSize + 'px'
        elBall2.innerText = gBall1CurrSize

    } else {
        elBall1.style.height = gBall1CurrSize + 'px'
        elBall1.style.width = gBall1CurrSize + 'px'
        elBall1.innerText = gBall1CurrSize

        elBall2.style.height = gBall2CurrSize + 'px'
        elBall2.style.width = gBall2CurrSize + 'px'
        elBall2.innerText = gBall2CurrSize
    }
}

function onFifthBall() {
    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = getRandomColor()
}

function onSixthBall() {
    const elBall1 = document.querySelector('.ball')
    const elBall2 = document.querySelector('.ball2')   
    const elBody = document.querySelector('body')
    
    gBall1CurrSize = 100
    gBall2CurrSize = 100
    gIsBall3Clicked = false
    
    elBody.style.backgroundColor = 'rgb(19, 19, 19)'
    elBall1.style.backgroundColor = 'darkkhaki'
    elBall1.style.height = gBall1CurrSize + 'px'
    elBall1.style.width = gBall1CurrSize + 'px'
    elBall1.innerText = gBall1CurrSize

    elBall2.style.backgroundColor = 'rgb(186, 111, 230)'
    elBall2.style.height = gBall2CurrSize + 'px'
    elBall2.style.width = gBall2CurrSize + 'px'
    elBall2.innerText = gBall2CurrSize
}