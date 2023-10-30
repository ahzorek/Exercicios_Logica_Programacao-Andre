// 1.  Para cada elemento de frutas, criar um option no datalist idFrutas;
//     O elemento/fruta deve constar na propriedade innerText e sua respectiva posição deve ser posta no id do Option, conforme exemplo abaixo (veja html). 

// ~~~javaScript
//     var frutas = ["tomate", "morango", "limão", "Abacaxi", "Pêra", "Uva"]
// ~~~


const frutas = ["Tomate", "Morango", "Limão", "Abacaxi", "Pêra", "Uva", "Mirtilo", "Amora"]

const dataList = document.querySelector('#listaDeFrutas')

frutas.map((fruta, index) => {
  console.log(fruta)
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