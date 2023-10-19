
      //  39 6. Crie um programa para gerenciar as notas dos alunos de uma escola.
      //  40 - Crie um vetor para armazenar o nome dos alunos.
      //  41 - Crie um vetor para armazenar o endereço dos alunos.
      //  42 - Crie um vetor para armazenar o nome da mãe dos alunos.
      //  43 - Crie um vetor para armazenar o nome do pai dos alunos.
      //  44 - Crie um vetor para armazenar o telefone dos pais dos alunos.
      //  45 - Crie 4 vetores para armazenar 4 notas por aluno.
      //  46 - As informações nos vetores se relacionarão através dos indexadores dos vetores.
      //  47 - Crie uma tela para cadastrar os alunos(nome, endereço, nome dos pais, telefone).
      //  48 - Crie uma tela para cadastrar as notas dos alunos.
      //  49 - Crie uma tela para consultar o cadastro e situação dos alunos.

      //elementos de navegação
      const movableContainer = document.querySelector('#movableContainer')
      const navButton__DEV = document.querySelector('.nav-button')
      const allInnerDivs = document.querySelectorAll('.inner-div')
      const alerts = document.querySelectorAll('.alerts')
      let currContainerPos = 0
      let isShowingAlert

      //captura as estruturas form
      const formRegistrarAluno = document.querySelector('#formRegistroAluno')
      const formRegistrarNotas = document.querySelector('#registrarNotasAluno')
      const escolheAluno = document.querySelector('#selecionaAluno')

      //inicializa variaveis de armazenamento de dados
      const nomesAlunos = ['Ferris Bueller']
      const enderecoAlunos = ['4160 Country Club Drive']
      const nomesMaes = ['Katie Bueller']
      const nomesPais = ['Tom John Bueller']
      const telefonesPais = ['00 12345 6789']
      const nota1 = [6]
      const nota2 = [7]
      const nota3 = [6]
      const nota4 = [8]

      //cadastro aluno
      const alunoNome = document.querySelector('#nomeDoAluno')
      const enderecoInputs = document.querySelectorAll('.address')
      const alunoMae = document.querySelector('#nomeMae')
      const alunoPai = document.querySelector('#nomePai')
      const telefone = document.querySelector('#telephone')
      const inputs = [alunoNome, alunoMae, alunoPai, telefone]

      //registro notas
      const notasInputs = document.querySelectorAll('.notas')
      const arrayNotas = [nota1, nota2, nota3, nota4]

      //tela verificação
      const selectAluno = document.querySelector('#selectAlunos')

      //tela resumo aluno (elemento de saida)
      const slotResumo = document.querySelector('#resumoSlot')

      // captura os dados do aluno da tela e cria suas respectivas entradas nas arrays de dados, avança para a tela de adicionar notas
      formRegistrarAluno.addEventListener('submit', e => {
        e.preventDefault()
        nomesAlunos.push(alunoNome.value)
        let endereco = ''
        for (let i = 0; i < enderecoInputs.length; i++) {
          const element = enderecoInputs[i].value
          endereco = endereco + ' ' + element
          enderecoInputs[i].value = ''
        }
        enderecoAlunos.push(endereco)
        nomesMaes.push(alunoMae.value)
        nomesPais.push(alunoPai.value)
        telefonesPais.push(telefone.value)

        pushNewAlunoToList(alunoNome.value)
        // clearInputsFromArr(inputs)
        formRegistrarAluno.reset()
        moveContainerTo(3)
      })



      //captura as notas atraves dos inputs na tela. salva nas respectivas arrays e retorna para a tela inicial
      formRegistrarNotas.addEventListener('submit', e => {
        e.preventDefault()
        for (let i = 0; i < 4; i++) {
          arrayNotas[i].push(Number(notasInputs[i].value))
          notasInputs[i].value = ''
        }
        formRegistrarNotas.reset()
        moveContainerTo(1)
      })


      // invocada apos salvar as informaçoes do aluno para suas respectivas arrays, insere o novo aluno recem criado na select list da tela de gerar os relatorios. recebe o nome do aluno para exebição e infere a chave pelo tamanho da array nomeAlunos (talvez nao ideal)
      function pushNewAlunoToList(aluno) {
        const chave = (nomesAlunos.length - 1)
        const newAluno = document.createElement('option')
        newAluno.setAttribute('value', chave)
        newAluno.innerText = aluno
        selectAluno.appendChild(newAluno)
        // console.log('Criado aluno:: ', aluno, 'CHAVE:: ', chave)
      }

      // seleciona o aluno a partir de uma lista select, empurra o value key (index) para a função exibir relatorio do aluno e move a tela para o relatorio
      // ou, se nao houve aluno selecionado, emite um alerta e aguarda
      escolheAluno.addEventListener('click', () => {
        if (selectAluno.value !== 'null') {
          displayAluno(selectAluno.value)
          moveContainerTo(5)
          selectAluno.value = 'null'
        } else
          showAlert('Erro!', 'Não foi selecionado um aluno.', 2)
      })

      // recebe como chave o index do aluno, a partir desse valor preenche varios campos desse "relatorio", resumo do aluno. gera tbm uma nota media a partir das 3 notas coletadas.
      function displayAluno(key) {
        slotResumo.innerHTML = ''
        const media = (nota1[key] + nota2[key] + nota3[key] + nota4[key]) / 4
        let status; if (media >= 7) { status = 'aprovado' } else { status = 'reprovado' }
        const resumoAluno = document.createElement('div')
        resumoAluno.setAttribute('class', 'text-left')
        const templateResumo = `
            <h2 class="text-4xl font-medium mb-6">Resumo do Aluno</h2>
            <dl class="max-w-md text-gray-900 divide-y divide-gray-600 ">
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-700 text-lg ">Nome</dt>
                <dd class="text-lg font-semibold">${nomesAlunos[key]}</dd>
              </div>
              <div class="flex flex-col py-3">
                <dt class="mb-1 text-gray-700 text-lg ">Endereço</dt>
                <dd class="text-lg font-semibold">${enderecoAlunos[key]}</dd>
              </div>
              <div class="flex flex-col pt-3">
                <dt class="mb-1 text-gray-700 text-lg">Mãe</dt>
                <dd class="text-lg font-semibold">${nomesMaes[key]}</dd>
              </div>
              <div class="flex flex-col pt-3">
                <dt class="mb-1 text-gray-700 text-lg">Pai</dt>
                <dd class="text-lg font-semibold">${nomesPais[key]}</dd>
              </div>
              <div class="flex flex-col pt-3">
                <dt class="mb-1 text-gray-700 text-lg">Telefone Contato</dt>
                <dd class="text-lg font-semibold">${telefonesPais[key]}</dd>
              </div>
            </dl>
            <section id="notas">
              <span>Nota 1<h6>${nota1[key]}</h6></span>
              <span>Nota 2<h6>${nota2[key]}</h6></span>
              <span>Nota 3<h6>${nota3[key]}</h6></span>
              <span>Nota 4<h6>${nota4[key]}</h6></span>
              <span class="${status}">Nota Média<h6>${media.toFixed(1)}</h6></span>
            </section>
        `
        resumoAluno.innerHTML = templateResumo
        slotResumo.appendChild(resumoAluno)
      }

      // as funcoes abaixo desempenham papeis utilitarios, movendo a tela ou exibindo alertas ou gerando tempos de espera

      // segunda implementaçao de uma funcao para mover o container pelas telas
      // a primeira talvez nao tenha sido a melhor a longo prazo :)
      // valor default pra 1. (se eu esquecer de passar o valor volta pra tela inicia.)
      function moveContainerTo(screen = 1) {
        // Mapa de screens
        // screen 1 - Menu seletor ação
        // screen 2 - Cadastro Aluno
        // screen 3 - Cadastro Notas
        // screen 4 - Seletor aluno
        // screen 5 - Relatorio resumo aluno
        const containerLocation = (screen - 1) * 100
        movableContainer.style.transform = `translateX(-${containerLocation}vw)`

      }

      document.querySelector('#goToCriarAlunoBtn').addEventListener('click', () => moveContainerTo(2))
      document.querySelector('#goToVerificarAlunoBtn').addEventListener('click', () => moveContainerTo(4))
      document.querySelector('#goToStartBtn').addEventListener('click', () => moveContainerTo(1))

      // primeira implementaçao da funcao para mover o container pelas telas,
      // recebe uma direção e um tamanho de pulo.
      // ideal para navegação linear, nao foi muito longe em aplicabilidade
      function moveContainer(dir, v = 1) {
        if (dir === 'next') {
          if (currContainerPos < ((allInnerDivs.length - 1) * 100)) {
            currContainerPos = currContainerPos + (100 * v)
            movableContainer.style.transform = `translateX(-${currContainerPos}vw)`
          } else return
        }
        if (dir === 'prev') {
          if (currContainerPos > 0) {
            currContainerPos = currContainerPos - (100 * v)
            movableContainer.style.transform = `translateX(-${currContainerPos}vw)`
          } else return
        }
      }

      // itera por uma array de inputs para resetar seus valores
      function clearInputsFromArr(arr) {
        for (let i = 0; i < arr.length; i++) {
          arr[i].value = ''
        }
      }

      // controla a exibição de alertas no topo da tela para tentar lidar com (varias) possiveis excecoes
      async function showAlert(error, message, loc) {
        if (!isShowingAlert) {
          isShowingAlert = true
          const newAlert = document.createElement('div')
          newAlert.setAttribute('class', "p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-200")
          newAlert.innerHTML = `<span class="font-medium">${error}</span> ${message}`
          alerts[loc].appendChild(newAlert)
          alerts[loc].style.transform = 'translateY(0)'
          await delay(1800)
          alerts[loc].style.transform = 'translateY(-1000px)'
          await delay(300)
          alerts[loc].removeChild(newAlert)
        }
        isShowingAlert = false
      }

      // ativa botoes de seta de navegção que vao tela a tela. facilita a vida do dev. :)
      document.querySelector('#devmode').addEventListener('click', () => {
        if (navButton__DEV.style.display === 'none') {
          navButton__DEV.style.display = 'flex'
        } else
          navButton__DEV.style.display = 'none'
      })

      // funcao serve para criar gaps de tempo entre a execução de outras funcoes, um atraso estrategico para produzir algum efeito ou coisa assim
      async function delay(time = 120) {
        await new Promise(resolve => setTimeout(resolve, time))
      }