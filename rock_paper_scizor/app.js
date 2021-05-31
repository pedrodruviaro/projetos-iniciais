const botao = document.querySelector('.btn')
let pontosPlayer1 = 0;
let pontosPlayer2 = 0;

botao.addEventListener('click', () => {

    const resultado = document.querySelector('.resultado')
    resultado.textContent = ''


    //contando os pontos
    const pontos1 = document.querySelector('.pontos1')
    const pontos2 = document.querySelector('.pontos2')



    pontos1.textContent = pontosPlayer1;
    pontos2.textContent = pontosPlayer2;


    const opcoes = ['PEDRA', 'PAPEL', 'TESOURA']

    const emoji1 = document.querySelector('.emoji1')
    const emoji2 = document.querySelector('.emoji2')
    

    emoji1.textContent = opcoes[sorteiaNumero()]
    emoji2.textContent = opcoes[sorteiaNumero()]

    console.log(emoji1.textContent, emoji2.textContent);

    //empate
    if (emoji1.textContent === emoji2.textContent) {
        resultado.textContent = 'Deu empate!'
    }

        //player 1 ganha
    if ((emoji1.textContent === opcoes[0] && emoji2.textContent === opcoes[2]) || (emoji1.textContent === opcoes[1] && emoji2.textContent === opcoes[0]) || (emoji1.textContent === opcoes[2] && emoji2.textContent === opcoes[1])) {

        resultado.textContent = 'Player 1 venceu!'
        pontosPlayer1++;
        pontos1.textContent = pontosPlayer1;

        //player 2 ganha
    } else if ((emoji2.textContent === opcoes[0] && emoji1.textContent === opcoes[2]) || (emoji2.textContent === opcoes[1] && emoji1.textContent === opcoes[0]) || (emoji2.textContent === opcoes[2] && emoji1.textContent === opcoes[1])) {

        resultado.textContent = 'Player 2 venceu!'
        pontosPlayer2++;
        pontos2.textContent = pontosPlayer2;
    }


})



//sorteia numero de 0 a 2
function sorteiaNumero() {
    return Math.floor(Math.random() * 3)
}

