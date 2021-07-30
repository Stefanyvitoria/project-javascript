function load() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `now it's ${hora.toString()} o'clock.`
    
    if (hora < 12) {
        //dia
        img.src = 'fotomanha.png'
        document.body.style.background= '#8d9120'
    } else if (hora <= 18) {
        //tarde
        img.src = 'fototarde.png'
        document.body.style.background= '#6a3f52'
    } else {
        //noite
        img.src = 'fotonoite.png'
        document.body.style.background= '#24386d'
    }
}