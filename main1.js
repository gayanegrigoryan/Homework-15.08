const body = document.getElementById('body')
const nshan = ['+', '-', '*', '/']

const inputA = document.createElement('input')
inputA.placeholder = 'A'
body.appendChild(inputA)

const select = document.createElement('select')
nshan.forEach(nshan => {
    const option = document.createElement('option')
    option.value = nshan
    option.innerHTML = nshan
    select.appendChild(option)
} )
body.appendChild(select)

const inputB = document.createElement('input')
inputB.placeholder = 'B'
body.appendChild(inputB)

const button = document.createElement('button')
button.innerHTML = '='
body.appendChild(button)

const span = document.createElement('span')
body.appendChild(span)

button.onclick = () => {
    switch (select.value){
        case '+':span.innerHTML = Number(inputA.value) + Number(inputB.value); break;
        case '-':span.innerHTML = Number(inputA.value) - Number(inputB.value); break;
        case '*':span.innerHTML = Number(inputA.value) * Number(inputB.value); break;
        case '/':span.innerHTML = Number(inputA.value) / Number(inputB.value); break;
    }
}


