function generate() {
    //recovery number
    var n = document.querySelector('input#num')
    if (n.value.length == 0) {
        window.alert('Check the entry and try again!')
        return
    }
    var num = Number(n.value)
    var sel = document.querySelector("select#sel")

    sel.innerHTML = ''
    for (let i = 0; i<=10; i++) {
        let item = document.createElement('option')
        item.text = `${num} x ${i} = ${num*i}`
        item.setAttribute('value',`${i}`)
        sel.appendChild(item)
    }
}