const printCellsTombola = () => {
  const cellsSection = document.getElementById(`mainTable`)
  for (let i = 1; i < 77; i++) {
    const cells = document.createElement(`div`)
    cells.classList.add(`cells`)
    cells.innerText = i
    cellsSection.appendChild(cells)
  }
}

printCellsTombola()

// const arrayNumberAlreadyPlayed = []

// const buttonGo = document.getElementById(`startButton`)
// buttonGo.addEventListener(`click`, () => {
//   const randomNumber = Math.ceil(Math.random() * 75)
//   arrayNumberAlreadyPlayed.push(randomNumber)
//   const numberChoosed = document.createElement("li")
//   numberChoosed.innerText = randomNumber
//   numberChoosed.classList.add(`numberPlayed`)
//   const numberExtracted = document.getElementById(`playerResult`)
//   numberExtracted.appendChild(numberChoosed)
//   // console.log(numberChoosed)
// })

// const arrayNumberAlreadyPlayed = []

// const buttonGo = document.getElementById(`startButton`)
// buttonGo.addEventListener(`click`, () => {
//   const randomNumber = Math.ceil(Math.random() * 75)
//   arrayNumberAlreadyPlayed.push(randomNumber)
//   for (let i = 0; i < arrayNumberAlreadyPlayed.length; i++) {
//     console.log(arrayNumberAlreadyPlayed)
//   }
//   if (randomNumber !== arrayNumberAlreadyPlayed) {
//     const numberChoosed = document.createElement("li")
//     numberChoosed.innerText = randomNumber
//     numberChoosed.classList.add(`numberPlayed`)
//     const numberExtracted = document.getElementById(`playerResult`)
//     numberExtracted.appendChild(numberChoosed)
//     console.log(arrayNumberAlreadyPlayed)
//   }
// })

/////////////////////////////////////////////////////////

const arrayNumberAlreadyPlayed = []

const buttonGo = document.getElementById(`startButton`)
buttonGo.addEventListener(`click`, () => {
  if (arrayNumberAlreadyPlayed.length === 75) {
    buttonGo.disabled = true
    alert("All numbers have been drawn!")
    return
  }
  let randomNumber
  do {
    randomNumber = Math.ceil(Math.random() * 75)
  } while (arrayNumberAlreadyPlayed.includes(randomNumber))

  arrayNumberAlreadyPlayed.push(randomNumber)
  const numberChoosed = document.createElement("li")
  numberChoosed.innerText = randomNumber
  numberChoosed.classList.add(`numberPlayed`)
  const numberExtracted = document.getElementById(`playerResult`)
  numberExtracted.appendChild(numberChoosed)
  // console.log(numberChoosed.innerText)

  const numberBox = document.getElementsByClassName(`numberPlayed`)

  // const test = numberBox.map((el) => el.innerText === numberChoosed.innerText)
  // console.log(test)

  // for (let i = 0; i < numberBox.length; i++) {
  //   const boxValue = numberBox[].innerText
  //   console.log(boxValue)
  // }
})

/////////////////////////////////////////////////////////

// const unselectPreviewCells = () => {
//   const previouslySelected = document.querySelector(`.selected`)
//   if (previouslySelected) {
//     previouslySelected.remove(`selected`)
//   }
// }
// unselectPreviewCells()
