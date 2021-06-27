const hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
const btn = document.getElementById('clr-btn')
const color = document.querySelectorAll('.color')

let hexNumber

const randomNumber = function (num) {
  return Math.floor(Math.random() * num)
}

const genHexVal = function () {
  hexNumber = '#'
  for (let i = 0; i < 6; i++) {
    hexNumber += hexValue[randomNumber(hexValue.length)]
  }
}

btn.addEventListener('click', function () {
  color.forEach(function (color) {
    genHexVal()
    color.style.backgroundColor = hexNumber
    color.textContent = hexNumber
  })
})
