function atualizaData() {


    const data = new Date()

    let diaNumero = data.getDate()
    let diaSemana = data.getDay()
    let mes = data.getMonth()
    let ano = data.getFullYear()

    const mostraMes = document.querySelector('.titulo')
    const mostraDiaNumero = document.querySelector('.dia-numero')
    const mostraDiaSemana = document.querySelector('.dia-semana')
    const mostraAno = document.querySelector('.ano')

    //mes do ano
    if (mes === 0) {
        mostraMes.textContent = "Janeiro"
    }
    if (mes === 1) {
        mostraMes.textContent = "Fevereiro"
    }
    if (mes === 2) {
        mostraMes.textContent = "Março"
    }
    if (mes === 3) {
        mostraMes.textContent = "Abril"
    }
    if (mes === 4) {
        mostraMes.textContent = "Maio"
    }
    if (mes === 5) {
        mostraMes.textContent = "Junho"
    }
    if (mes === 6) {
        mostraMes.textContent = "Julho"
    }
    if (mes === 7) {
        mostraMes.textContent = "Agosto"
    }
    if (mes === 8) {
        mostraMes.textContent = "Setembro"
    }
    if (mes === 9) {
        mostraMes.textContent = "Outubro"
    }
    if (mes === 10) {
        mostraMes.textContent = "Novembro"
    }
    if (mes === 11) {
        mostraMes.textContent = "Dezembro"
    }

    //dia da semana
    if (diaSemana === 0) {
        mostraDiaSemana.textContent = 'Domingo'
    }
    if (diaSemana === 1) {
        mostraDiaSemana.textContent = 'Segunda'
    }
    if (diaSemana === 2) {
        mostraDiaSemana.textContent = 'Terça'
    }
    if (diaSemana === 3) {
        mostraDiaSemana.textContent = 'Quarta'
    }
    if (diaSemana === 4) {
        mostraDiaSemana.textContent = 'Quinta'
    }
    if (diaSemana === 5) {
        mostraDiaSemana.textContent = 'Sexta'
    }
    if (diaSemana === 6) {
        mostraDiaSemana.textContent = 'Sábado'
    }

    //dia da semana em numero
    mostraDiaNumero.textContent = diaNumero

    //mostrando ano
    mostraAno.textContent = ano

}