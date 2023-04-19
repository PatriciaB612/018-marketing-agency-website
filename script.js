const nav = document.querySelector('.nav')
const closeBtn = document.querySelector('.close-nav')
const openBtn = document.querySelector('.open-nav')

closeBtn.addEventListener('click', () => {
  nav.classList.remove('open-navigation')
})

openBtn.addEventListener('click', () => {
  nav.classList.add('open-navigation')
})
