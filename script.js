const btn = document.querySelector('#e_btn')
const circle = document.querySelector('#circle')
const square = document.querySelector('#square')

const toggler = function (event) {
    console.log(event.target.id + "  " + event.currentTarget.id);
    event.target.classList.toggle('green')
}

btn.addEventListener('click', toggler, true)
circle.addEventListener('click', toggler, true)
square.addEventListener('click', toggler, true)