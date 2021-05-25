//----------------variáveis----------------
const botaoGerarSenha = document.querySelector('.botao-gerarSenha')
const mostraSenha = document.querySelector('.senha')

const caracteres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '*', '/', '+', '-', '_', '!', '@', '#', '$', '%', '&', '(', ')', '{', '[', '}', ']', '^', '~']

//----------------eventos----------------
botaoGerarSenha.addEventListener('click', () => {

    //array com 81 itens, quero 16
    let senha = "";
    for (let i = 0; i <= 15; i++) {
        senha += (caracteres[sorteiaNumero()])
    }

    mostraSenha.value = senha
})


//----------------funções----------------
function sorteiaNumero() {
    let numero = Math.floor(Math.random() * caracteres.length)
    return numero
}
