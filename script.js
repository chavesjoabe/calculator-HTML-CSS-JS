const buttons = document.querySelectorAll('.button')
const result = document.querySelector('#result')
const upper = document.querySelector('#upper_icons')

for (let button of buttons) {
    if (button.classList == 'button operator') {
        button.onmouseover = function() {
            button.style.background = '#87cefa'
        }
    } else {
        button.onmouseover = function() {
            button.style.background = 'green'
        }
    }
    button.onmouseout = function() {
        button.style.background = ""

    }
    button.onclick = function() {


        if (button.innerText == '=') {
            result.innerText = eval(result.innerText)
        } else if (button.innerText == 'C') {
            result.innerText = ''
        } else if (button.innerText != 'C' && button.innerText != '=' && button.innerText != 'backspace') {
            result.innerHTML += button.innerText
        } else if (button.id == 'backspace') {
            result.innerText = result.innerText.substring(0, result.innerText.length - 1)
        }

    }

}
const today = new Date()
upper.innerHTML += `<p>${today.toLocaleDateString('pt-BR')}</p>`