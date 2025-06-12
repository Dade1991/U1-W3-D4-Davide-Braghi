const cellsTombola = []

const printCellsTombola = () => {
  const cellsSection = document.getElementById(`mainTable`)
  for (let i = 0; i < 77; i++) {
    const cells = document.createElement(`div`)

    cells.classList.add(`cells`)
    cells.innerText = i
    cellsTombola.push(cells)

    cellsSection.appendChild(cells)
    console.log(`qui`, cells)
  }
}

printCellsTombola()

const buttonGo = document.getElementById(`startButton`)
buttonGo.addEventListener(`click`, (e) => {
  e.preventDefault()
  const randomNumber = Math.floor(Math.random() * 77)
  const numberChoosed = document.createElement("li")
  numberChoosed.appendChild(randomNumber)
  // console.log(`QUI`, randomNumber)
})
