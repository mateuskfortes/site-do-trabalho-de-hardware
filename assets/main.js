const cabeca = document.querySelector("#cabeca")
const titulo = document.querySelector("#titulo")
const resumo = document.querySelector("header p")

const art = document.querySelector("#artigo")

const destino = document.querySelector("#destino")
const caixa = document.querySelector("#caixa")
const caixa2 = document.querySelector("#caixa2")
const pessoas = document.querySelectorAll(".pessoas")
const biografia = document.querySelectorAll(".biografia")
const biotxt = document.querySelectorAll(".biografia p")
const foto = document.querySelectorAll(".foto")

const bt = document.querySelectorAll(".bt")
const te = document.querySelectorAll(".te")
const ponto = document.querySelectorAll(".ponto")

const slide = document.querySelector("#slide")
const bt1 = document.querySelector("#bt1")
const bt2 = document.querySelector("#bt2")

let dim1 = false

let largura = document.documentElement.clientWidth
let altura = document.documentElement.clientHeight
let posicaoV = window.scrollY

function texto(t, n) {

    if (te[t].style.display === 'none') {
        te[t].style.display = 'block'
        bt[t].innerText = 'Ler menos'
            if (dim1 === true) {
                biografia[n].style.display = 'none'
            }
        }
    else {
        te[t].style.display = 'none'
        bt[t].innerText = 'Ler mais'
        if (dim1 === true) {
            biografia[n].style.display = 'block'
        }
    }
}

function red() {
    largura = document.documentElement.clientWidth
    altura = document.documentElement.clientHeight
    
    
    te.forEach(function(t) {
        t.style.display = 'none'
    })
    
    if (largura < 1100) {
        pessoas[0].append(biografia[1])
        if (largura <= 600 || altura < 630) {
            dim1 = false
        }
        else {
            dim1 = true
        }
    }
    else {
        pessoas[1].append(biografia[1])
        dim1 = false
        caixa.style.marginLeft = (largura - destino.offsetWidth - 520) / 2 + "px"
    }
    
    if (largura <= 600 || (altura < 630 && largura < 1100)) {
        destino.style.margin = '110px auto 10px auto'

        destino.insertBefore(pessoas[0], art)

        art.style.margin = '0px 20px'

        caixa.style.marginLeft = '0px'

        pessoas[0].style.position = 'static'

        pessoas[0].style.margin = 'auto'

        biografia.forEach(function(b) {
            b.style.display = 'flex'
            if (largura > 550) {
                b.style.width = '500px'
            }
            else {
                b.style.width = '420px'
            }
        })

        biotxt.forEach(function(t) {
            t.style.margin = 'auto 10px'
        })

        foto.forEach(function(f) {
            f.style.margin = 'auto 10px'
        })
    }
    else if (largura > 600 || altura >= 630) {
        destino.style.margin = '110px 0px 0px 0px'

        posicaoV = window.scrollY

        caixa.append(pessoas[0])

        art.style.margin = '20px 20px'

        pessoas[0].style.position = 'sticky'

        pessoas[0].style.margin = '0'

        if (posicaoV >= 300) {
            pessoas[0].style.top = '55px'
        }
        else {
            pessoas[0].style.top = 130 - posicaoV / 4 + 'px'
        }

        biografia.forEach(function(b) {
            b.style.display = 'block'
            b.style.width = '200px'
        })

        biotxt.forEach(function(t) {
            t.style.margin = 'auto 10px'
        })

        foto.forEach(function(f) {
            f.style.margin = '10px auto'
        })
    }
}

function rol() {
    let posicaoV = window.scrollY
    
    if (posicaoV < 300) {
        cabeca.style.height = 120 - posicaoV / 4 + 'px'

        if (largura > 600) {
            pessoas.forEach(function(p) {
                p.style.top = 130 - posicaoV / 4 + 'px'
            })
        }

        if (posicaoV < 240) {
            titulo.style.marginTop = 30 - posicaoV / 8 + 'px'
        }
    }
    
    if (largura > 600 && posicaoV >= 300) {
        pessoas.forEach(function(p) {
            p.style.top = '55px'
        })
    }

    if (posicaoV >= 140) {
        resumo.style.display = 'none'
    }
    else  {
        resumo.style.display = 'block'
    }
    

    if (posicaoV >= 300) {
        titulo.style.marginTop = '0px'
        cabeca.style.height = '45px'
    }
}

window.onload = rol
window.onload = red

window.onscroll = rol
window.onresize = red
            
bt[0].onclick = function() {
    texto(0, 1);
    };
bt[1].onclick = function() {
    texto(1, 0);
    };

bt1.onclick = function() {
    if (slide.scrollLeft === 0){
        slide.scrollLeft = 1000
    }
    else {
        slide.scrollLeft -= 500
    }
}
bt2.onclick = function() {
    if (slide.scrollLeft === 1000) {
        slide.scrollLeft = 0
    }
    else{
        slide.scrollLeft += 500
    }
}