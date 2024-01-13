const screen1 = document.querySelector(".screen-1")
const screen2 = document.querySelector(".screen-2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let xAttempts = 1

function generateRandomNumber(){
    return Math.round(Math.random() * 10)
}

randomNumber = generateRandomNumber()

console.log(randomNumber)

btnTry.addEventListener("click", whenClick)
btnReset.addEventListener("click", hundleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == "Enter" && screen1.classList.contains("hide")) {
        hundleResetClick()
    }

})


function whenClick(event){
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber){
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document.querySelector(".screen-2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
    }
   
    inputNumber.value = ''

    xAttempts++
}

function hundleResetClick(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")

    randomNumber = generateRandomNumber()
    xAttempts = 1

    console.log(randomNumber)
}


