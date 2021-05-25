setInterval(() => {
    const data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()

    //
    const relogio = document.querySelector('.relogio')


    const spanHoras = document.querySelector('.horas')
    spanHoras.textContent = hora

    const spanMinutos = document.querySelector('.minutos')
    if(minuto < 10){
        minuto = `0${minuto}`
    }
    if(minuto < 30){
        relogio.classList.add('borda-azul')
    } 
    if(minuto >= 30) {
        relogio.classList.add('borda-verde')
    }

    spanMinutos.textContent = minuto

    const spanSegundos = document.querySelector('.segundos')
    if(segundo < 10){
        segundo = `0${segundo}`
    }
    spanSegundos.textContent = segundo

}, 1000);