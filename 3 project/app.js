let index = 0

const profiles = [
  {
    name: "Jinger Alien",
    job: "Designer", 
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit blanditiis recusandae ad, ex perferendis, numquam incidunt nemo veritatis doloribus unde nobis porro labore accusamus magni nostrum laboriosam cupiditate beatae est. Fugiat, nostrum expedita architecto laboriosam consequatur rerum, omnis repellat magni veritatis reprehenderit quos voluptatem vero!",
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
  }, 
  {
    name: "Brok James",
    job: "Bodybuilder", 
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit blanditiis recusandae ad, ex perferendis, numquam incidunt nemo veritatis doloribus unde nobis porro labore accusamus magni nostrum laboriosam cupiditate beatae est. Fugiat, nostrum expedita architecto laboriosam consequatur rerum, omnis repellat magni veritatis reprehenderit quos voluptatem vero!",
    img: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=723&q=80'
  },
  {
    name: "John Doe",
    job: "Web Developer", 
    about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nisi nobis maiores autem praesentium quos labore quisquam voluptas voluptatibus quam reprehenderit a incidunt blanditiis beatae sapiente, deleniti minima sequi asperiores esse. Amet praesentium repellendus dolorem voluptatum est nobis, ex laboriosam excepturi in, veritatis quidem quibusdam nostrum aut sit dignissimos minus?",
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  }

]

const buttons = document.querySelectorAll('.mbtn')
const Name = document.querySelector('.name')
const Job = document.querySelector('.job')
const About = document.querySelector('.about')
const Img = document.querySelector('.image')


Name.innerText = profiles[0].name
Job.innerText = profiles[0].job
About.innerText = profiles[0].about
Img.src = profiles[0].img


buttons.forEach((button) => {
  
  button.addEventListener('click', () => {
    if (index >= profiles.length) index = profiles.length

    if (button.id === 'next' && index < profiles.length - 1){
      index += 1
      console.log(index)
      Name.innerText = profiles[index].name
      Job.innerText = profiles[index].job
      About.innerText = profiles[index].about
      Img.src = profiles[index].img
    }
    
    if (button.id === 'prev' && index > 0){
      index -= 1
      Name.innerText = profiles[index].name
      Job.innerText = profiles[index].job
      About.innerText = profiles[index].about
      Img.src = profiles[index].img
    }
  })
  
})