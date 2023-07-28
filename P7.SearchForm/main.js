const input = document.querySelector('.search__input')
const list = document.querySelector('.search__history')

let tags = ["nodejs", "reactjs"]

function createTag() {
    let htmls = tags.map((tag,index) =>{
        return `
        <li>
            ${tag}
            <i class="uit uit-multiply" onclick="removeTag(${index})"></i>
        </li>
        `
    })
    list.innerHTML = htmls.join('')
    input.focus()
}

createTag()

function addTag(e) {
    if(e.keyCode === 13) {
        console.log(e)
        let tag = e.target.value.trim()
        if(tag != '' && !tags.includes(tag)) {
            tags.push(tag)
            createTag()
        } 
        e.target.value = ''
    }
}

input.addEventListener('keydown', addTag)

function removeTag(index){
    tags.splice(index, 1)
    createTag()
    input.focus()
}

const removeAll = document.querySelector('.search__remove')
removeAll.addEventListener('click', function(e){
    tags.length = 0
    createTag()
})