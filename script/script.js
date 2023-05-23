"use strict";

const image = ['01.webp', '02.webp', '03.webp', '04.webp'];
const avanti = document.getElementById('avanti');
const indietro = document.getElementById('indietro');
const carousel = document.getElementById('carousel')
let imgCorrente = 0;
const slide = document.createElement('div')

for (let i = 0; i < image.length; i++){
    const slide = document.createElement('div')
    slide.innerHTML = `<img id="img" src="./img/${image[i]}" alt=""></img>`
    slide.classList.add('slide')
    if(i === 0){
        slide.classList.add('active')
    }
    carousel.append(slide)
}

avanti.addEventListener('click', function(){

    const slides = document.getElementsByClassName('slide')
    slides[imgCorrente].classList.remove('active')

    if(imgCorrente < image.length - 1){
        imgCorrente++;
    }

    slides[imgCorrente].classList.add('active')
     
}
)

indietro.addEventListener('click', function(){

    const slides = document.getElementsByClassName('slide')
    slides[imgCorrente].classList.remove('active')

    if(imgCorrente > 0){
        imgCorrente--;
    }

    slides[imgCorrente].classList.add('active')
     
}
)