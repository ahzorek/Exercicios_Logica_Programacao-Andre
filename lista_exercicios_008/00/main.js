const frutas = ["Tomate", "Morango", "Limão", "Abacaxi", "Pêra", "Uva"]

const dataList = document.querySelector('#listaDeFrutas')

frutas.forEach((fruta, index) => {
  console.log(fruta);
  const newOption = createOption('option', index, fruta)
  dataList.appendChild(newOption)
})


function createOption(tagName, id, data) {
  const newOption = document.createElement(tagName)
  newOption.id = id
  newOption.innerText = data
  newOption.value = data

  return newOption
}