function count() {
    var start = document.querySelector('input#start')
    var end = document.querySelector('input#end')
    var step = document.querySelector('input#step')

    //validation
    if ( end.value.length == 0 ) {
        window.alert('Check the data and try again!')
        return
    }
    if (start.value.length == 0) {
        start.value = 0

    }
    if( step.value.length == 0) {
        step.value = 1
    }
    var res = document.querySelector('div#res')
    res.innerHTML = `Counting from ${start.value} to ${end.value} with step ${step.value}:<br><br>`

    for (var n = Number(start.value); n<=Number(end.value);n+=Number(step.value)) {
        res.innerHTML += `${n} `
    }
}