//copiando a senha do input
const botaoCopiar = document.querySelector('.botao-copiarSenha')

botaoCopiar.addEventListener('click', () => {

    let copyText = document.querySelector(".senha");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    console.log("Copied the text: " + copyText.value);
})