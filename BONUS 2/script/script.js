"use strict";

const image = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
const avanti = document.getElementById('avanti');
const indietro = document.getElementById('indietro');
const carousel = document.getElementById('carousel');
const previews = document.getElementById('previews');
let imgCorrente = 0;

//creazione dinamica immagini
for (let i = 0; i < image.length; i++){
    const slide = document.createElement('div');
    slide.innerHTML = `<img id="img" src="./img/${image[i]}" alt=""></img>`;
    slide.classList.add('slide');
    const preview = document.createElement('div')
    preview.innerHTML = `<img src="./img/${image[i]}" alt="">`
    preview.classList.add('preview')
    if(i === 0){
        slide.classList.add('active');
        preview.classList.add('active');
    }
    carousel.append(slide);
    previews.append(preview)
}

avanti.addEventListener('click', function(){

    const slides = document.getElementsByClassName('slide')
    const previewAll = document.getElementsByClassName('preview')
    slides[imgCorrente].classList.remove('active')
    previewAll[imgCorrente].classList.remove('active')

    if(imgCorrente < image.length - 1){
        imgCorrente++;
    } else {
        imgCorrente = 0
    }

    slides[imgCorrente].classList.add('active')
    previewAll[imgCorrente].classList.add('active')
     
}

)

indietro.addEventListener('click', function(){

    const slides = document.getElementsByClassName('slide')
    const previewAll = document.getElementsByClassName('preview')
    slides[imgCorrente].classList.remove('active')
    previewAll[imgCorrente].classList.remove('active')

    if(imgCorrente > 0){
        imgCorrente--;
    } else {
        imgCorrente = image.length -1
    }

    slides[imgCorrente].classList.add('active')
    previewAll[imgCorrente].classList.add('active')
     
}
)