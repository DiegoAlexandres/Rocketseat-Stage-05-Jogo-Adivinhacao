const screen1 = document.querySelector(".screen-01")
const screen2 = document.querySelector(".screen-02")

function whenClick (event){
    event.preventDefault()

    screen1.classList.toggle("hide")
}