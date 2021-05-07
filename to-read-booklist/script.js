/*let buttons = document.querySelectorAll('#book-list .delete')

buttons.forEach(function(button){

    button.addEventListener('click' , function(event) {
        let li = event.target.parentElement
        li.parentElement.removeChild(li)
    })
})
*/

//deleta livros (evento associado à LISTA, assim, mesmo se adicionarmos novos botões, tudo segue funcionando, ao contrário do código comentado acima!)
let list = document.querySelector('#book-list ul')

list.addEventListener('click', function (event) {

    if (event.target.className == 'delete') {
        let li = event.target.parentElement
        this.removeChild(li)
    }
})

//add books
let addForm = document.forms['add-book']

addForm.addEventListener('submit', function (event) {
    event.preventDefault()
    let input = addForm.querySelector('input[type="text"]')
    let valorInput = input.value
    let msg = document.querySelector('.msg-valid')

    if (input.value.length > 0) {

        //criando elementos (li e dois spans)
        let li = document.createElement('li')

        let bookName = document.createElement('span')
        bookName.classList.add('name')
        bookName.textContent = valorInput

        let deleteBtn = document.createElement('span')
        deleteBtn.classList.add('delete')
        deleteBtn.textContent = "delete"

        //append to DOM 
        li.append(bookName)
        li.append(deleteBtn)

        list.append(li)

        //limpando input
        
        msg.classList.add('invisible')
        input.value = ""
        input.focus()

    } else {
        input.focus()
        msg.classList.remove('invisible')
        
    }
})

//hide books
let hideBox = document.querySelector('#hide')
hideBox.removeAttribute('checked')

hideBox.addEventListener('change', function (event) {

    if (hideBox.checked) {
        list.classList.add('fadeOut')

        setTimeout(() => {
            list.classList.add('invisible')
        }, 400);

    } else {
        list.classList.remove('fadeOut')
        list.classList.remove('invisible')

    }
})

//searching books
let searchBar = document.forms['search-books'].querySelector('input[type="text"]')

searchBar.addEventListener('input', function () {

    let spanNames = document.querySelectorAll('.name')


    spanNames.forEach(function (spanName) {

        let bookName = spanName.textContent
        let parent = spanName.parentElement

        let regExp = new RegExp(searchBar.value, 'i')

        if (!regExp.test(bookName)) {
            parent.classList.add('invisible')
        } else {
            parent.classList.remove('invisible')
        }
    })
})