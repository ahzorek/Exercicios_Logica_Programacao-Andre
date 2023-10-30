// 23 2. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade.

// 2. Refatore o exercício L7E2 usando os métodos filter(), map() e reduce(), no lugar das estruturas de repetição tradicionais, para processar os vetores idades[] e nomes[] a fim de mostrar a listagem contendo apenas os dados das pessoas menores de idade.




//captura entrada de dados, saida da tabela e inicializa array de dados
const formData = document.querySelector('#cadastro-pessoa')
const output = document.querySelector('output')
const data = []

formData.addEventListener('submit', e => {
  e.preventDefault()

  data.push({
    name: formData.nm_Name.value,
    age: formData.nm_Age.value
  })
  formData.reset()
})

//processa os dados a partir da array idades. se idade menor que 18, cria um novo elemento e adiciona para dentro da tabela de exibição. ao fim, altera a propriedade display da section output e exibe a tabela na tela
const processarDados = document.querySelector('#processar-dados')

processarDados.addEventListener('click', () => {
  const underAge = data.filter(({ age }) => age < 18)

  console.log(underAge)
  printTable(underAge)
})

function printTable(data) {
  output.innerHTML = ''
  const table = document.createElement('table')
  table.classList.add('table')
  table.classList.add('p-10')
  table.innerHTML = `
    <thead>
      <tr>
        <th scope="col">Nome</th>
        <th scope="col">Idade</th>
      </tr>
    </thead>
  `

  const tBody = document.createElement('tbody')

  data.forEach((item) => {
    console.log(item)
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
      <td>${item.name}</td>
      <td>${item.age}</td>
    `
    tBody.appendChild(newRow)
  })

  table.appendChild(tBody)
  output.appendChild(table)
  output.setAttribute('style', 'display: block; margin-top: 2rem;')
}