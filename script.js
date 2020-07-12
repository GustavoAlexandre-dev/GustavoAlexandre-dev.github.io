function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora>= 0 && hora<12) {
        // BOM DIA!
        img.src = 'manha.jpg'
        document.body.style.background = '#828259'}
    else if(hora>=12 && hora <18){
        // BOA TARDE! 
        img.src = 'tarde1.jpg'
        document.body.style.background = "#2B7580"
    }
    else{
        img.src = 'noite.jpg'
        document.body.style.background = "#191725"
        // BOA NOITE!
    }
setInterval(carregar, 60000)
}