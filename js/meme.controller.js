'use strict'

const input = document.getElementById('myInput')

let gElCanvas
let gCtx

input.addEventListener('input', function () {
    setLineTxt(input.value)
    renderMeme()
})

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    renderMeme()
}

function renderMeme() {
    const meme = getMeme() //asks for var gMeme from service
    const imgs = getImgs() //asks for var gImgs from service

    const elImg = new Image()
    elImg.src = imgs[meme.selectedImgId].url
    elImg.onload = () => renderImg(elImg)
}

function renderImg(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    renderText()
}

function renderText() {
    const meme = getMeme() //gets gMeme from service
    const line = meme.lines[meme.selectedLineIdx] //might need to change [] this to 0

    gCtx.font = `${line.size}px Impact`
    gCtx.fillStyle = line.color
    gCtx.strokeStyle = 'white'
    gCtx.lineWidth = 2
    gCtx.textAlign = 'center'

    gCtx.strokeText(line.txt, gElCanvas.width / 2, line.size + 10)
    gCtx.fillText(line.txt, gElCanvas.width / 2, line.size + 10)
}

function renderGallery() {
    const imgs = getImgs()
    let strHTML = ''

    for (let i = 0; i < imgs.length; i++) {
        strHTML += `
            <img src="${imgs[i].url}" 
            onclick="onImgSelect(${i})">
        `
    }
    document.querySelector('section').innerHTML = strHTML
}

function onImgSelect(imgIdx) {
    setImg(imgIdx)
    openGallery()
    renderMeme()
}

function onOpenGallery() {
    const elGallery = document.querySelector('.img-Gallery')
    const elMainPage = document.querySelector('.tool-bar')
    const elMainHeader = document.querySelector('.main-header')

    if (elGallery.style.display === 'block') {
        elMainPage.style.display = 'grid'
        elGallery.style.display = 'none'
    } else {
        elMainHeader.style.gridTemplateColumns = 'none'
        elMainPage.style.display = 'none'
        elGallery.style.display = 'block'
    }
}

function onDownloadCanvas(elLink) {
    elLink.download = 'meme' // Set a name for the downloaded file
    const dataUrl = gElCanvas.toDataURL()

    elLink.href = dataUrl
}