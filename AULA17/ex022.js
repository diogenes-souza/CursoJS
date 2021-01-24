//VARIAVEL OBJETO EM JS - FORMA EVOLUIDA DE VARIAVEL

let amigo = {nome:'Marcolinha', 
            idade:22, 
            peso:82.7, 
            engordar(p=0) {
                this.peso+=p
            }
            
}

amigo.engordar(10)
console.log(`${amigo.nome} tem o peso ${amigo.peso}`)