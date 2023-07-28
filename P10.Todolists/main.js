const inputBox = document.querySelector('input');
const addBtn = document.querySelector('button');
let toDoLists = [];

function saveToDoList(){
    localStorage.setItem('todoLists', JSON.stringify(toDoLists));
}

function init(){
    let data = JSON.parse(localStorage.getItem('todoLists'))
    data.forEach(function(todo){
        toDoLists.push(todo)
    })
    createTodoElement()
}

function createTodoElement(){
    let htmls = toDoLists.map(function(todo,index){
        return `
            <li>
                ${todo}
                <i class='bx bxs-trash-alt' onclick=removeTodo(${index})></i>
            </li>
        `
    }).join(' ');
    document.querySelector('.lists').innerHTML = htmls
}

function removeTodo(index) {
    toDoLists.splice(index, 1)
    createTodoElement()
    saveToDoList()
}

function addTodoEvent(e){
    e.preventDefault();
    if(inputBox.value == ""){
        alert("Enter your to do")
    }
    else{
        toDoLists.push(inputBox.value)
        saveToDoList()
        createTodoElement()
        inputBox.value = ""
        inputBox.focus()
    }
}

addBtn.addEventListener('click',addTodoEvent)

init()