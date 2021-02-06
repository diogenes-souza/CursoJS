/*
A parte 4 dos exercícios, na verdade é a aprentação das atividades propostas. as partes 5 e 6 são as resoluções.
*/

function contar() {
    let nInicio = document.getElementById('inicio')
    let nFim = document.getElementById('fim')
    let nPasso = document.getElementById('passo')
    let resultado = document.getElementById('resultado')

    if(nInicio.value.length == 0 && nFim.value.length == 0 && nPasso.value.length == 0) {
        resultado.innerHTML = 'Preencha os campos!!!'
    }else if (nInicio.value.length == 0 || nFim.value.length == 0 || nPasso.value.length == 0) {
        resultado.innerHTML = 'Impossível contar.'
    }else {
        let i = Number(nInicio.value)
        let f = Number(nFim.value)
        let p = Number(nPasso.value)

        if(p <= 0){
            window.alert('Passo não pode ser zero, passo recebe valor 1')
            p = 1
        }
        
        resultado.innerHTML = `Contando: <br> `

        if(i < f) 
        {
            //contagem crescente
            for(let cont = i; cont <= f; cont = cont + p){
                resultado.innerHTML += ` ${cont} \u{1f449}`
                
                //https://unicode.org/emoji/charts/full-emoji-list.html
            }
        }
        else
        {
            //Contagem regressiva
            for(let cont = i; cont >= f; cont -= p){
                resultado.innerHTML += ` ${cont} `
            }
        }
        resultado.innerHTML += ` \u{1f3c1} `
        //https://unicode.org/emoji/charts/full-emoji-list.html
    }
}