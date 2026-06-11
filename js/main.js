'use strict'

console.log('hi');

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
}

function renderMeme() {
    const elImg = new Image()
    elImg.src = gImgs[0].url
    elImg.onload = () => renderImg(elImg)
}   

function renderImg(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    renderText()
}

function renderText() {
    const line = gMeme.lines[0]
    gCtx.font = `${line.size}px Impact`
  gCtx.fillStyle = line.color
  gCtx.strokeStyle = 'white'
  gCtx.lineWidth = 2
  gCtx.textAlign = 'center'
  gCtx.strokeText(line.txt, gElCanvas.width / 2, line.size + 10)
  gCtx.fillText(line.txt, gElCanvas.width / 2, line.size + 10)
}



var gImgs = [
    {
        id: 1,
        url: 'img/1.jpg',
        keywords: ['funny', 'cat']
    },
        {
        id: 2,
        url: 'img/2.jpg',
        keywords: ['funny', 'cat']
    }
]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'red'
        }
    ]
}

var gKeywordSearchCountMap = {
    'funny': 12, 'cat': 16, 'baby': 2
}
