var img = document.getElementById('imagem')
var date = new Date()
var hours = date.getHours()
var button = document.getElementById('button')
var submit = document.getElementById('submit')
function execute(){
    if (hours>=0 && hours < 12){
        img.style.backgroundImage  = 'url(images/manhã.jpg)'
        img.style.backgroundPosition = 'center center'
        document.body.style.backgroundImage = 'url(images/background-clouds.jpg)'
        document.body.style.backgroundPosition = 'bottom bottom'
        button.style.border = '1px solid #C2E15C'
        submit.style.backgroundColor = '#C2E15C'
    }else if(hours >= 12 && hours <18){
        img.style.backgroundImage = 'url(images/tarde.jpg)'
        img.style.backgroundPosition = 'center center'
        document.body.style.backgroundImage = 'url(images/background-afternoon.jpg)'
        document.body.style.backgroundPosition = 'bottom bottom'
        button.style.border = '1px solid #DB662C'
        submit.style.backgroundColor = '#DB662C'
    }else{
        img.style.backgroundImage = 'url(images/noite.jpg)'
        img.style.backgroundPosition = 'bottom center'
        document.body.style.backgroundImage = 'url(images/background-night.jpg)'
        button.style.border = '1px solid #140F5C'
        submit.style.backgroundColor = '#140F5C'
    }
}
function enter(){
    if (hours>=0 && hours < 12){
        button.style.backgroundColor = '#C2E15C'
    }else if(hours >= 12 && hours <18){
        button.style.backgroundColor = '#DB662C'
    }else{
        button.style.backgroundColor = '#140F5C'
    }
}
function left(){
    button.style.backgroundColor = 'white'
    button.style.transitionDuration = '0.5s'
}