function check() {
    // recovey current year
    var ano = new Date().getFullYear()
     
    //recovery selected year
    var textAno = document.querySelector('input#txtano')
    var anoNasc = textAno.value

    // validation
    if (ano < anoNasc || anoNasc.length == 0) {
        window.alert('[ERROR] Check the data and try again.')
    }

    // calculate values
    var sex = document.getElementsByName('sex')
    var idade  = ano - anoNasc

    //create image
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    // check genre
    var genre = ''
    if (sex[0].checked) {
        genre = 'homem'
        if (idade >= 0 && idade < 5) {
            //bebê
            img.setAttribute('src', 'bebe-m.png')
        } else if( idade < 18) {
            //jovem
            img.setAttribute('src', 'jovem-m.png')
        }else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'adulto-m.png')
        }else {
            //idoso
            img.setAttribute('src', 'idoso-m.png')
        }

    } else {
        genre = 'mulher'
        if (idade >= 0 && idade < 5) {
            //bebê
            img.setAttribute('src', 'bebe-f.png')
        } else if( idade < 18) {
            //jovem
            img.setAttribute('src', 'jovem-f.png')
        }else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'adulto-f.png')
        }else {
            //idoso
            img.setAttribute('src', 'idoso-f.png')}
        
    }
    var res = document.querySelector('div#res')
    res.style.textAlign = 'center'
    res.innerHTML = `${idade} years old ${genre}<br>`
    res.appendChild(img)
}

