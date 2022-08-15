const button = document.getElementById('change')

button.addEventListener('click', changeColor)


function changeColor() {
  const red = Math.floor(Math.random() * 360)
  const green = Math.floor(Math.random() * 360)
  const blue = Math.floor(Math.random() * 360)

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
  

  const name = document.querySelector('.bad')
  //name.innerHTML = ´<h1>rgb(${red}, ${green}, ${blue}</h1>´
  console.log(name.childNodes)
}