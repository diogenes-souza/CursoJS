var agora = new Date()
var diaSemana = agora.getDay()

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

console.log('dia: '+diaSemana)

switch(diaSemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('sexta')
        break
    case 5:
        console.log('Sabado')
        break
    case 6:
        console.log('Domingo')
        break
    default:
        console.log('Erro tente novamente!!!')
        break
}