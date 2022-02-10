'use strict'

const btn = document.getElementById('btn')
const range = document.getElementById('range')
const span = document.getElementById('range-span')
const input = document.getElementById('text')
const square = document.getElementById('square')
const circle = document.getElementById('circle')
const e_btn = document.getElementById('e_btn')

e_btn.style.display = "none"

const squareColor = function () {
    square.style.backgroundColor = input.value
}

const circleSize = function () {
    span.textContent = range.value
    circle.style.height = range.value + "%"
    circle.style.width = range.value + "%"
}

btn.addEventListener('click', squareColor)
range.addEventListener('input', circleSize)