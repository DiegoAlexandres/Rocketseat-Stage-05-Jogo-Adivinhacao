const screen1 = document.querySelector(".screen-1")
const screen2 = document.querySelector(".screen-2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let xAttempts = 5

btnTry.addEventListener("click", whenClick)
btnReset.addEventListener("click", hundleResetClick)

function whenClick(event){
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == xAttempts){
        screen1.classList.add("hide")
        screen2.classList.remove("hide")
    }
   
}

function hundleResetClick(event){
    event.preventDefault()

    screen1.classList.remove("hide")
    screen2.classList.add("hide")

}