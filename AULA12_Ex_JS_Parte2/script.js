function carregar() {
    var mensagem = document.getElementById('msg');
    var imagem = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    //var hora = 15
    mensagem.innerHTML = `Agora são: ${hora} horas.`

    if(hora > 0 && hora < 12){
        //Bom dia
        imagem.src='foto-manha.png'
        document.body.style.backgroundColor='#fce786'
    }
    else if(hora >= 12 && hora <= 18){
        //Boa tarde
        imagem.src='foto-tarde.png'
        document.body.style.backgroundColor='#FC9010'
    }
    else {
        //Boa noite
        imagem.src='foto-noite.png'
        document.body.style.backgroundColor='#8667a0'
    }
}

