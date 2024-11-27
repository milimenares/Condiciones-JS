//declaro mi variable section-1
const imagenUno = document.querySelector('.img-e1')

//evento
imagenUno.addEventListener('click', () => {
   if(imagenUno.style.border) {
    imagenUno.style.border = ''
   } else {
    imagenUno.style.border = '2px dotted red'
    imagenUno.style.borderRadius = '100%'
   }
})

//declaro mis variables section-2
const comprar = document.querySelector('.comprar')
const resultado = document.querySelector('#resultado')

//evento
comprar.addEventListener('click', () => {
    const sticker1 = Number(document.querySelector('#sticker1').value)
    const sticker2 = Number(document.querySelector('#sticker2').value)
    const sticker3 = Number(document.querySelector('#sticker3').value)
    const suma = sticker1 + sticker2 + sticker3

    if(suma <= 10) {
        resultado.innerHTML = 'Felicidades! llevas ' + suma + ' stickers en total <i class="fa-solid fa-face-grin-stars"></i>'
        resultado.style.color = 'black'
        resultado.style.backgroundColor = '#c8f5ff'
        resultado.style.borderRadius = '20px'
        resultado.style.padding = '10px 20px'
    } else {
        resultado.innerHTML = 'Lo siento <i class="fa-solid fa-face-frown"></i> llevas demasiados stickers!'
        resultado.style.color = 'white'
        resultado.style.backgroundColor = '#ff4545'
        resultado.style.borderRadius = '20px'
        resultado.style.padding = '10px 20px'
    }
})

//declaro mis variables section-3
const pass = document.querySelector('#pass')
const validar = document.querySelector('.validar')

//evento
validar.addEventListener('click', () => {
    const p1 = document.querySelector('#p1').value
    const p2 = document.querySelector('#p2').value
    const p3 = document.querySelector('#p3').value
    const passGlobal = p1 + p2 + p3

    pass.style.color = '#fff'
    pass.style.padding = '15px 0'
    pass.style.borderTop = '2px dotted #fff'
    pass.style.borderBottom = '2px dotted #fff'

    if(passGlobal === '911') {
        pass.innerHTML = '<i class="fa-solid fa-unlock"></i> Password 1 CORRECTO'
    } else if(passGlobal === '714'){
        pass.innerHTML = '<i class="fa-solid fa-lock-open"></i> Password 2 CORRECTO'
    } else {
        pass.innerHTML = '<i class="fa-solid fa-skull"></i> ¡Password INCORRECTO! <i class="fa-solid fa-skull"></i>'
    }
})