const eKey = document.querySelector('.card.key p')
const eWhich = document.querySelector('.card.which p')
const eCode = document.querySelector('.card.code p')
const eLocation = document.querySelector('.card.location p')
const guide = document.querySelector('.guide')
document.addEventListener("keydown", function(e){
    guide.classList.add('hide')
    if(e.keyCode === 32){
        eKey.innerHTML = 'Space'
    }
    else{
        eKey.innerHTML = e.key
    }

    eWhich.innerHTML = e.which
    eCode.innerHTML = e.code
    eLocation.innerHTML = e.location

    document.querySelector('.header').innerHTML = e.which
    document.querySelector('.container').classList.remove('hide')
})