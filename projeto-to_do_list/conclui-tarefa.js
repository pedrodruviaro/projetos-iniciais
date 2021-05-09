//criando o botão de concluir tarefa
let criaBotaoConclui = () => {

    let botaoConclui = document.createElement('button')
    botaoConclui.textContent = "concluir"
    botaoConclui.classList.add('check-button')

    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui;
}

//concluindo a tarefa (atribuindo classe ao pai do botao)
let concluirTarefa = (event) => {

    let alvo = event.target

    let tarefaConcluida = alvo.parentElement

    tarefaConcluida.classList.toggle('done')
}
