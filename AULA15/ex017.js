//Vetores

let exemplo = 2

if(exemplo==1){

    let num = [5, 8, 7, 5, 8, 2, 90]

    num.sort() //ordena o array
    num.push(45) //adiciona na ultima posição

    let x=0
    while (x < num.length){
        console.log(`valor: ${num[x]} indice: ${x}`)
        x++
    }

    console.log('Divisão de repeticao...')

    for (x=0; x < num.length; x++){
        console.log(`A posição ${x} tem o valor ${num[x]}`)
    }

    console.log('Divisão de repeticao...')

    for(let y in num){
        console.log(`A posição ${y} tem o valor ${num[y]}`)
    }
}

else{
    let num = [5, 8, 7, 5, 8, 2, 90]

    num.push(100)
    num.sort()
    console.log(num)
    console.log('numero de posições: ' + num.length)
    console.log(`o primeiro valor de num é: ${num[0]}`)

    let pos = num.indexOf(7)
    if(pos == (-1)){
        console.log(`Valor não encontrado!!!`)
    }
    else{
        console.log(`O valor esta na posição ${pos}`)
    }
}