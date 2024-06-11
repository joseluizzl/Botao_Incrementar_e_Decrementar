var contador = document.getElementById('contador')
var botao = document.getElementById('botao')
var botao2 = document.getElementById('botao2')


botao.addEventListener('click', () => {
    var valor = contador.textContent
    valor++

    contador.textContent = valor
})

botao2.addEventListener('click', () => {
    var valor = contador.textContent
    valor--

    contador.textContent = valor
})