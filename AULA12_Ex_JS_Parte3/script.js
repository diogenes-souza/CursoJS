function verificar() {
    let data = new Date() //pega a data do sistema
    let ano = data.getFullYear() //da data extrai apenas o ano com 4 digítos
    let fano = document.getElementById('txtano') //Pega o valor que é digitado na caixa de texto
    var res = document.getElementById('res') //pega o valor do resultado, dessa forma é possível jogar valores na variavel resultado.

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[Erro] verifique os dados e tente novamente!!!')
    }
    else{
        var fsexo = document.getElementsByName('radsex')//[0] primeiro radios, [1] segundo radius ...
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //Cria um elemento/tag 'img' 
        img.setAttribute('id', 'foto') // seta um ID com o nome 'foto'

        if(fsexo[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe-homem.png')
            }
            else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'homem-adolescente.png')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem-adulto.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        }
        else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe-mulher.png')
            }
            else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'mulher-adolescente.png')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher-adulto.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'mulher-idoso.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        //res.innerText = 'teste'
        res.appendChild(img)

    }
}