function parImp(n) {
    if (n % 2 == 0) {
        return 'par'
    }
    else {
        return 'impar'
    }
}

let pos = parImp(45)
console.log(pos)