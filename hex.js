const hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
const btn = document.getElementById('clr-btn')
const colorsDiv = document.getElementById('colors')

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
  genHexVal()
  colorsDiv.style.backgroundColor = hexNumber
})
