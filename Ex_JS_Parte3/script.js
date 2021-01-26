function verificar() {
    let data = new Date() //pega a data do sistema
    let ano = data.getFullYear() //da data extrai apenas o ano com 4 digítos
    let fano = document.getElementById('txtano') //Pega o valor que é digitado na caixa de texto
    let res = document.getElementById('res') //pega o valor do resultado, dessa forma é possível jogar valores na variavel resultado.

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[Erro] verifique os dados e tente novamente!!!')
    }
    else{
        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsexo[1].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
            }
            else if (idade < 21){
                //Jovem
            }
            else if (idade < 50) {
                //Adulto
            }
            else{
                //Idoso
            }
        }
        else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
            }
            else if (idade < 21){
                //Jovem
            }
            else if (idade < 50) {
                //Adulto
            }
            else{
                //Idoso
            }
        }

    }
}