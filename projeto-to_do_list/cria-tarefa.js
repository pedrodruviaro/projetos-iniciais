let botaoNovoItem = document.querySelector('[data-form-button]')

botaoNovoItem.addEventListener('click', (event) => {
    event.preventDefault()

    criarTarefa()

})

//funções
let criarTarefa = () => {     //function criarTarefa() {}
    let lista = document.querySelector('[data-list]')
    let formInput = document.querySelector('[data-form-input]')
    let valorInput = formInput.value
    let conteudo = `<p class="content"> ${valorInput} </p>`

    let novaTarefa = document.createElement('li')
    novaTarefa.classList.add('task')
    novaTarefa.innerHTML = conteudo
    novaTarefa.append(criaBotaoConclui())
    novaTarefa.append(criaBotaoDeleta())

    lista.append(novaTarefa)

    formInput.value = ''
    formInput.focus()
}
