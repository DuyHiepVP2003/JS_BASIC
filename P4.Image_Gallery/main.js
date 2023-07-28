const gallery = document.querySelector('.gallery')
const images = document.querySelectorAll('.image img')
const close = document.querySelector('.close')
const galleryImg = document.querySelector('.gallery img')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
let currentIndex = 0

function showGallery(){
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((image, index) => {
    image.addEventListener('click', () =>{
        currentIndex = index
        showGallery()
    })
});

close.addEventListener('click', () =>{
    gallery.classList.remove('show')
})

next.addEventListener('click', () =>{
    currentIndex++
    if(currentIndex >= images.length){
        currentIndex = 0
    }
    showGallery()
})

prev.addEventListener('click', () =>{
    currentIndex--
    if(currentIndex < 0){
        currentIndex = images.length - 1
    }
    showGallery()
})
