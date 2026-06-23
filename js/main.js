'use strict'

const input = document.getElementById('myInput')

let gElCanvas
let gCtx

input.addEventListener('input', function () {
    gMeme.lines[0].txt = input.value
    renderMeme()
})

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    rendergallery-btn()
    renderMeme()
}

function renderMeme() {
    const elImg = new Image()
    elImg.src = gImgs[gMeme.selectedImgId].url
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
        url: 'meme-imgs (square)/1.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 2,
        url: 'meme-imgs (square)/2.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 3,
        url: 'meme-imgs (square)/3.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 4,
        url: 'meme-imgs (square)/4.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 5,
        url: 'meme-imgs (square)/5.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 6,
        url: 'meme-imgs (square)/6.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 7,
        url: 'meme-imgs (square)/7.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 8,
        url: 'meme-imgs (square)/8.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 9,
        url: 'meme-imgs (square)/9.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 10,
        url: 'meme-imgs (square)/10.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 11,
        url: 'meme-imgs (square)/11.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 12,
        url: 'meme-imgs (square)/12.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 13,
        url: 'meme-imgs (square)/13.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 14,
        url: 'meme-imgs (square)/14.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 15,
        url: 'meme-imgs (square)/15.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 16,
        url: 'meme-imgs (square)/16.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 17,
        url: 'meme-imgs (square)/17.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 18,
        url: 'meme-imgs (square)/18.jpg',
        keywords: ['funny', 'cat']
    }
]

var gMeme = {
    selectedImgId: 0,
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


// const elSection = document.querySelector('section')

// for (let i = 0; i < gImgs.length; i++) {
//     const elImggallery-btn = new Image()

//     elImggallery-btn.src = gImgs[i].url
//     elSection.appendChild(elImggallery-btn)

//     console.log(elImggallery-btn);
// }

let strHTML = ''

function rendergallery-btn() {
    let strHTML = ''

    for (let i = 0; i < gImgs.length; i++) {
        strHTML += `
            <img src="${gImgs[i].url}" 
            onclick="onImgSelect(${i})">
        `
    }

    document.querySelector('section').innerHTML = strHTML
}


// Add onClick to the gallery-btn, it calls to onImgSelect =
// this func updates gMeme with the clicked img and than 
// call renderImg

// function onImgSelect(elSelectedImg) {
//     console.log(elSelectedImg);

// }
function onImgSelect(imgIdx) {
    console.log(imgIdx)
    gMeme.selectedImgId = imgIdx

    opengallery-btn()
    renderMeme()
}

function opengallery-btn() {
    const elgallery-btn = document.querySelector('.img-gallery-btn')
    const elMainPage = document.querySelector('.tool-bar')

    if (elgallery-btn.style.display === 'block') {
        elMainPage.style.display = 'grid'
        elgallery-btn.style.display = 'none'
    } else {
        elMainPage.style.display = 'none'
        elgallery-btn.style.display = 'block'
    }

}

function downloadCanvas(elLink) {

    elLink.download = 'meme' // Set a name for the downloaded file

    const dataUrl = gElCanvas.toDataURL()
    // console.log(dataUrl)
    elLink.href = dataUrl
}

function onMenuClick() {
    
}