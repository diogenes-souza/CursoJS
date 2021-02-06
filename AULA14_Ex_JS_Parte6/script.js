function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('tabsel')

    if(num.value.length == 0) {
        window.alert('Preencha o campo!!!')
    }else {
        let n = Number(num.value)
        tab.innerHTML = ` `

        //https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/select
        for (let c = 0; c <= 10; c++){
            tab.innerHTML += ` <option value="opt${c}"> ${n} x ${c} = ${n*c} </option> `
        }

        // let n = Number(num.value)
        // let c = 0

        // tab.innerHTML = ` `
        // while(c <= 10) {
        //     let item = document.createElement('option')
        //     item.text = `${n} x ${c} = ${n*c}`
        //     item.value = `opt${c}`
        //     tab.appendChild(item)
        //     c++
        // }
    }
}