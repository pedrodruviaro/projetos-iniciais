//criando botao de deletar a tarefa
let criaBotaoDeleta = () => {

    let botaoDeleta = document.createElement('button')
    botaoDeleta.textContent = "deletar"
    botaoDeleta.classList.add('check-button')

    botaoDeleta.addEventListener('click', deletaTarefa)

    return botaoDeleta
}

//deletando a tarefa
let deletaTarefa = (event) => {

    let alvo = event.target

    let tarefaDeletada = alvo.parentElement

    tarefaDeletada.remove()
}
