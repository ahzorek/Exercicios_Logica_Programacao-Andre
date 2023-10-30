//  25 3. Faça um algoritmo que leia o nome, o sexo e o salário de 5 funcionários e guarde esses dados em três vetores.No final, mostre uma listagem contendo apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.

// 3. Refatore o exercício L7E3 usando os métodos filter(), map() e reduce(), no lugar das estruturas de repetição tradicionais, para processar os vetores nomes[], sexos[] e salários[] a fim de mostrar uma listagem contendo apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.

const inputNome = document.querySelector('#nomeEntrada')
const inputSalarios = document.querySelector('#salarioEntrada')
const inputSexo = document.querySelector('#sexoEntrada')
const saida = document.querySelector('#saida')
const tBody = document.querySelector('tbody')

let nomes = []
let salarios = []
let sexos = []

const workers = []

const form = document.querySelector('#cadastro')

form.addEventListener('submit', e => {
  e.preventDefault()

  workers.push({
    name: form.name.value,
    gender: form.gender.value,
    paycheck: form.paycheck.value,
  })

  console.log('ate aqui funciona:: :)', workers)
})


// function salvarDados() {
//   const nome = inputNome.value
//   const salario = Number(inputSalarios.value)

//   if (validarCampos(nome, 'string') && validarCampos(salario, 'number')) {
//     nomes.push(inputNome.value)
//     salarios.push(Number(inputSalarios.value))
//     sexos.push(inputSexo.value)
//   } else {
//     alert('inputs não são válidos')
//   }
//   if (nomes.length === 5) {
//     document.querySelector('#salvarButton').disabled = true
//     document.querySelector('#processarButton').disabled = false
//   } else {
//     inputNome.value = ''
//     inputSalarios.value = ''
//     inputSexo.value = 'null'
//     inputNome.focus()
//   }
// }

//processa os dados a partir da array idades. se idade menor que 18, cria um novo elemento e adiciona para dentro da tabela de exibição. ao fim, altera a propriedade display da section output e exibe a tabela na tela

document.querySelector('#processarButton').addEventListener('click', () => {
  const femaleWorkersOver5kPayCheck = workers.filter(worker => {
    if (worker.paycheck > 5000) {
      if (worker.gender === 'fem') {
        return true
      }
    }
  })
  printData(femaleWorkersOver5kPayCheck)
})

function printData(data) {
  data.map(each => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
      <td>${each.name}</td>
      <td>R$ ${each.paycheck}</td>
    `
    tBody.appendChild(newRow)
  })

  saida.setAttribute('style', 'display: contents;')
}
