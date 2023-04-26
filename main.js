const links = document.querySelectorAll('.links a')
const nav = document.querySelector('#nav')

links.forEach((link) => {
  link.onclick = () => {
    nav.checked = false
  }
})
