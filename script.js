const input = document.querySelector('.input'),
    btns = Array.from(document.querySelectorAll('.span'));


btns.map((btn) => {
    btn.addEventListener('click', function (e) {
        let buttons = e.target.innerHTML
        Font()
        if (buttons == 'AC') {
            input.innerHTML = ''
        }
        else if (buttons == '+/-') {
            input.innerHTML = parseFloat(input.innerHTML) * -1
        }
        else if (buttons == 'CE') {
            input.innerHTML = input.innerHTML.slice(0, -1)
        }
        else if (buttons == '=') {
            input.innerHTML = eval(input.innerHTML)
            font()
        }
        else {
            if (input.innerHTML.length >= 32) {
                input.innerHTML=input.innerHTML
            }
            else {
                input.innerHTML += buttons
                Font()
            }
        }
    })
})

function Font() {
    if (input.innerHTML.length >= 20) input.style.fontSize = '20px'
    else if (input.innerHTML.length >= 12) input.style.fontSize = '30px'
    else if (input.innerHTML.length < 12) input.style.fontSize = '40px'
}
