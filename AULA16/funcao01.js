//Detecta se o número é par ou ímpar

function parImp(n) {
    if (n % 2 == 0) {
        return 'par'
    }
    else {
        return 'impar'
    }
}

let pos = parImp(46)
console.log(pos)