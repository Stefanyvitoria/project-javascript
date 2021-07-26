function generate() {
    //recovery number
    var n = document.querySelector('input#num')
    if (n.value.length == 0) {
        window.alert('Check the entry and try again!')
        return
    }
    var num = Number(n.value)
    var res = document.querySelector("div#res")
    res.innerHTML = ''
    for (let i = 0; i<=10; i++) {
        // window.alert('')
        res.innerHTML += `${num} x ${i} = ${num*i} <br>`
    }


}