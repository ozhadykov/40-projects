let num = 0
/*
document.getElementById('INCREASE').addEventListener('click', () => {
  const text = document.querySelector('.cnt')
  num += 1
  if (num > 0) {
    document.querySelector('.cnt').style.color = 'green'
  }
  text.innerText = num
})

document.getElementById('DECREASE').addEventListener('click', () => {
  const text = document.querySelector('.cnt')
  num -= 1
  if (num < 0) {
    document.querySelector('.cnt').style.color = 'red'
  }
  text.innerText = num
})

document.getElementById('RESET').addEventListener('click', () => {
  const text = document.querySelector('.cnt')
  num = 0
  document.querySelector('.cnt').style.color = 'black'
  text.innerText = num
})
*/

const buttons = document.querySelectorAll('.btn')
let text = document.querySelector('.cnt')

buttons.forEach((button) => {
  button.addEventListener('click',  () => {
    if (button.id === 'RESET') {
      num = 0
      document.querySelector('.cnt').style.color = 'black'
      text.innerText = num
    }

    if (button.id === 'DECREASE') {
      num -= 1
      if (num < 0) {
        document.querySelector('.cnt').style.color = 'red'
      }
      text.innerText = num
    }

    if (button.id === 'INCREASE') {
      num += 1
      if (num > 0) {
        document.querySelector('.cnt').style.color = 'green'
      }
      text.innerText = num
    }
  })
})