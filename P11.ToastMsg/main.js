const successBtn = document.querySelector('.control__btn.success');
const errorBtn = document.querySelector('.control__btn.error');
const warningBtn = document.querySelector('.control__btn.warning');
const toasts = document.querySelector('.toasts');

function createToast(){
    // <div class="toast success">
    //         <i class="fa-solid fa-circle-check"></i>
    //         <p>This is a success message !</p>
    //     </div>
    let status = this.classList[0]
    let templateContent

    switch(status){
        case 'success':
            templateContent =`
                                <i class="fa-solid fa-circle-check"></i>
                                <p>This is a success message !</p>
                                `
            break;
        case 'error':
            templateContent =`
                            <i class="fa-solid fa-triangle-exclamation"></i>
                            <p>This is a error message !</p
                                `
            break;
        case 'warning':
            templateContent =`
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <p>This is a warning message !</p
                                `
            break;
    }
    let div = document.createElement('div')
    div.classList.add('toast')
    div.classList.add(status)
    div.innerHTML = templateContent
    toasts.appendChild(div)
    setTimeout(() =>{
        div.style.animation = 'removeToast 2s ease forwards'
    },4000)
    setTimeout(() =>{
        div.remove();
    },6000)
}

successBtn.addEventListener('click',createToast)
errorBtn.addEventListener('click',createToast)
warningBtn.addEventListener('click',createToast)