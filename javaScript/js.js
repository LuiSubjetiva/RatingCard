//Container
const body = document.querySelector('body')
const main = document.querySelector('.main-container')

//Card
const star = document.querySelector('.star')
const numbers = document.querySelectorAll('.num')
const submit = document.querySelector('.submit-item')

//Modal
const modal = document.querySelector('.modal')
const subtitle = document.querySelector('.subtitle')
const thanks = document.querySelector('.thanks')

//Botones
const closebtn = document.querySelector('.closebtn')
const openbtn = document.querySelector('button')

//Variable de estado
let state = false

// Abrir Modal
const openNav = () => {
    document.getElementById("myNav").style.height = "100%";
  }
// Cerrar Modal
const closeNav = () => {
    document.getElementById("myNav").style.height = "0%";
  }
// Favoritos
    star.addEventListener('click', () => {
        if(!state) {
        state = true
        star.style.backgroundColor = "#ffffff"
        star.style.transition = ".5s"
        // console.log(state)
        }
        else{
        state = false
        star.style.backgroundColor = "#3f4c5a"
        star.style.transition = ".5s"
        // console.log(state)
        }
    }) 

// Hover/Capture/star event
star.addEventListener('mouseenter', () =>{
    star.style.backgroundColor ="#89b7fa"
    star.style.transition = ".5s"
    if(state) {
        star.style.backgroundColor ="#ffffff"
    }
})
star.addEventListener('mouseleave', () =>{
    star.style.backgroundColor = "#3f4c5a"
    star.style.transition = ".5s"
    if(state) {
        star.style.backgroundColor = "#ffffff"
    }
})
  
//Funcionalidad de numeros
for(let i = 0; i < numbers.length;i++){
    let nums = numbers[i].getAttribute('value')
    numbers[i].addEventListener('click', () => {
        subtitle.textContent = `You pick number ${nums} !`
        if(subtitle.textContent == `You pick number ${nums} !`){
            thanks.textContent = 'Thank You !'
        }
    })   
}
//Animación de estado numeros
for(let i = 0; i < numbers.length;i++) {
    numbers[i].addEventListener('click',() => {
        let current = document.getElementsByClassName('active')
        if(current.length > 0 ) { 
            current[0].className = current[0].className.replace("active","")
            numbers[i].style.transition = '1s'   
        }
        if(current.length == 0 ){
            numbers[i].classList.add('active')
            numbers[i].style.transition = '.5s' 
        }
    })
}

//Botones
submit.addEventListener('click',openNav)
thanks.addEventListener('click',closeNav)






