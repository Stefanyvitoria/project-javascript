function check() {
    // recovery current year
    var ano = new Date().getFullYear()
     
    //recovery selected year
    var textAno = document.querySelector('input#txtano')
    var year_birth = textAno.value

    // validation
    if (ano < year_birth || year_birth.length == 0) {
        window.alert('[ERROR] Check the data and try again.')
    }

    // calculate values
    var sex = document.getElementsByName('sex')
    var age  = ano - year_birth

    //create image
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    // check genre
    var genre = ''
    if (sex[0].checked) {
        genre = 'Man'
        if (age >= 0 && age < 5) {
            //bebê
            img.setAttribute('src', 'bebe-m.png')
        } else if( age < 18) {
            //jovem
            img.setAttribute('src', 'jovem-m.png')
        }else if (age < 50) {
            //adulto
            img.setAttribute('src', 'adulto-m.png')
        }else {
            //idoso
            img.setAttribute('src', 'idoso-m.png')
        }

    } else {
        genre = 'Woman'
        if (age >= 0 && age < 5) {
            //bebê
            img.setAttribute('src', 'bebe-f.png')
        } else if( age < 18) {
            //jovem
            img.setAttribute('src', 'jovem-f.png')
        }else if (age < 50) {
            //adulto
            img.setAttribute('src', 'adulto-f.png')
        }else {
            //idoso
            img.setAttribute('src', 'idoso-f.png')}
        
    }
    var res = document.querySelector('div#res')
    res.style.textAlign = 'center'
    res.innerHTML = `${age} years old ${genre}<br>`
    res.appendChild(img)
}

