//Kiểm tra độ dài input
//Kiểm tra email hợp lệ
//Kiểm tra thông tin được điền hay chưa
//Kiểm tra mật khẩu match
//succees
//error
const form = document.querySelector('form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')
function succees(input) {
    input.className = 'input__box success'
    input.nextElementSibling.innerText = ''
}

function error(input, message) {
    input.className = 'input__box error'
    input.nextElementSibling.innerText = message
}

function isInputLengthValid(input) {
    let inputText = input.value.trim()
    if(inputText.length >= 25){
        error(input, `${input.placeholder} must be less than 25 characters`)
        return false
    }
    else if(inputText.length < 6){
        error(input, `${input.placeholder} must be at least 6 characters`)
        return false
    }
    else return true
}

function isEmailValid(input) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(input.value.trim())) {
		return true
	} else {
		error(input, 'Email is not valid')
        return false
	}
}

function isRequired(input) {
    if(input.value.trim() === ''){
        error(input, `${input.placeholder} is required`)
        return false
    }
    return true
}

function isConfirmValid(input) {
    if(input.value.trim()!== password.value.trim()){
        error(input, 'Passwords do not match')
        return false
    }
    return true
}

form.addEventListener('submit',function(e) {
    e.preventDefault()
    let inputArr = [username, email, password, password2]

    for(let index = 0; index < inputArr.length; index++){
        let input = inputArr[index]
        if(!isRequired(input)){
            continue;
        }
        if(!isInputLengthValid(input)){
            continue;
        }
        if(!isEmailValid(input) && index === 1){
            continue;
        }
        if(!isConfirmValid(input) && index === 3){
            continue;
        }
        succees(input)
    }
})