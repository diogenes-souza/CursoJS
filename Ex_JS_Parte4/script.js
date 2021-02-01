function contar() {
    let nInicio = document.getElementById('inicio')
    let nFim = document.getElementById('fim')
    let nPasso = document.getElementById('passo')
    let resultado = document.getElementById('res')

    if(nInicio.value.length == 0 && nFim.value.length == 0 && nPasso.value.length == 0) {
        resultado.innerHTML = 'Preencha os campos!!!'
    }else if (nInicio.value.length == 0 || nFim.value.length == 0 || nPasso.value.length == 0) {
        resultado.innerHTML = 'Impossível contar.'
    }else if (nPasso.value == 0){
        nPasso = 1
        resultado.innerHTML = 'Contando...'
        for(nInicio; nInicio <= nFim; nPasso){
            resultado.innerHTML = `${nInicio} -> `
        }
    }else{
        resultado.innerHTML = 'Contando...'
        // for(nInicio.value; nInicio.value <= nFim.value; nPasso.value){
        //     resultado.innerHTML = `${nInicio} -> `
        // }
    }
    
}