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
            elCurrBall.style.height = gBall1CurrSize + 'px'
            elCurrBall.style.width = gBall1CurrSize + 'px'
            elCurrBall.innerText = gBall1CurrSize
        } else {
            gBall1CurrSize += addSize
            elCurrBall.style.height = gBall1CurrSize + 'px'
            elCurrBall.style.width = gBall1CurrSize + 'px'
            elCurrBall.innerText = gBall1CurrSize
        }

    } else {

        if (gBall2CurrSize + addSize > gMaxDiameter) {
            gBall2CurrSize = 100
            elCurrBall.style.height = gBall2CurrSize + 'px'
            elCurrBall.style.width = gBall2CurrSize + 'px'
            elCurrBall.innerText = gBall1CurrSize
        } else {
            gBall2CurrSize += addSize
            elCurrBall.style.height = gBall2CurrSize + 'px'
            elCurrBall.style.width = gBall2CurrSize + 'px'
            elCurrBall.innerText = gBall2CurrSize
        }
    }
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

    console.log('elSpan1:', elSpan1)
    console.log('elSpan2:', elSpan2)
    
    if (!gIsBall3Clicked) {
        elBall1.style.height = gBall2CurrSize + 'px'
        elBall1.style.width = gBall2CurrSize + 'px'

        
        elBall2.style.height = gBall1CurrSize + 'px'
        elBall2.style.width = gBall1CurrSize + 'px'

    } else {
        elBall1.style.height = gBall1CurrSize + 'px'
        elBall1.style.width = gBall1CurrSize + 'px'

        
        elBall2.style.height = gBall2CurrSize + 'px'
        elBall2.style.width = gBall2CurrSize + 'px'

    }
    
    console.log('elSpan1:', elSpan1)
    console.log('elSpan2:', elSpan2)
}