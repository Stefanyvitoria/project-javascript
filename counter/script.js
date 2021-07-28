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
    } else if (step.value <= 0 ) {
        window.alert('Step invalid!\nEnter a value less than 0.')
        return
    }

    var res = document.querySelector('div#res')
    res.innerHTML = `Counting from ${start.value} to ${end.value} with step ${step.value}:<br><br>`


    if (Number(start.value) <= Number(end.value)){
        for (var n = Number(start.value); n<=Number(end.value);n+=Number(step.value)) {
            res.innerHTML += `${n} \u{1F449} `
            console.log(n)
        }
    }else {
        for (var n = Number(start.value); n>=Number(end.value);n-=Number(step.value)) {
            res.innerHTML += `${n} \u{1F449} `
            console.log(n)
        }
    }
    res.innerHTML += '\u{1F6A9}'
}