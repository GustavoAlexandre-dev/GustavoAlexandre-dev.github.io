// Relígio!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const clockConteiner = document.querySelector('p1');

const updateClock = () => {
    const present = new Date();
    const hor = present.getHours();
    const min = present.getMinutes();
    const sec = present.getSeconds();

    var relo = `
<span>${String(hor).length === 1 ? `0${hor}` :hor}</span> :
<span>${String(min).length === 1 ? `0${min}` :min}</span> :
<span>${String(sec).length === 1 ? `0${sec}` :sec}</span>
`;
    document.getElementById("p1").innerHTML = relo;

}

setInterval(updateClock, 1000)

//    Calenário!!!!!!!!!!!!!!!!

var d = new Date();
var day = d.getDate() //Dia em n°
var week = d.getDay() //Dia da semana-
var month = d.getMonth() //mês do ano-
var year = d.getFullYear() //Ano 4 dígitos
var diaEscrito = ""

switch (day) {
    case 1:
        var diaEscrito = "Hoje é "
        break;

    default:
        var diaEscrito = "Hoje são "
        break;
}
switch (week) {
    case 0:
        week = "Domingo"
        break;
    case 1:
        week = "Segunda-feira"
        break;
    case 2:
        week = "Terça-feira"
        break;
    case 3:
        week = "Quarta-feira"
        break;
    case 4:
        week = "Quinta-feira"
        break;
    case 5:
        week = "Sexta-feira"
        break;
    case 6:
        week = "Sábado"
        break;
}
switch (month) {
    case 0:
        month = "Janeiro"
        break;
    case 1:
        month = "Fevereiro"
        break;
    case 2:
        month = "Março"
        break;
    case 3:
        month = "Abril"
        break;
    case 4:
        month = "Maio"
        break;
    case 5:
        month = "Junho"
        break;
    case 6:
        month = "Julho"
        break;
    case 7:
        month = "Agosto"
        break;
    case 8:
        month = "Setembro"
        break;
    case 9:
        month = "Outubro"
        break;
    case 10:
        month = "Novembro"
        break;
    case 11:
        month = "Desembro"
        break;
}

var tot = `   <h1>${diaEscrito} ${day} de ${month} de ${year}</h1>`;
console.log(tot)
window.document.getElementById('p2').innerHTML = tot
