const searchBtn = document.querySelector('.input-icon')

searchBtn.addEventListener('click', function(){
    this.parentElement.classList.toggle('active')
    this.previousElementSibling.focus()
})

