const elementoDiv = document.getElementsByTagName('section');
const buttonClean = document.getElementById('clear-board')
const buttonVQV = document.getElementById('generate-board')
const inputPixels = document.getElementById('board-size')
const quantidadePixel = document.getElementsByClassName('quantidade')


function criandoDivs(multiplo) {
  for (let index = 0; index < multiplo; index += 1) {
    let makeDiv = document.createElement('div');
    makeDiv.className = "quantidade"
    elementoDiv[0].appendChild(makeDiv);
  }
  for (let index = 0; index < multiplo; index++) {
    let conta = 0;
    for (let index = 0; index < multiplo; index++) {
      let test = document.getElementsByClassName('quantidade')
      let test1 = document.createElement('div')
      test1.className = "pixel"
      test[conta].appendChild(test1)
      conta = conta + 1;
    }
  }
}

criandoDivs(5);

let clickSelecionar = document.querySelectorAll('#color-palette div')
let clickSelecionarPixel = document.querySelectorAll('.pixel')

function apagando(test) {
  for (let index = 0; index < 4; index++) {
    test[index].className = 'color'

  }
}


function recebeclickPaleta(eventoDeOrigen) {
  apagando(clickSelecionar);
  let selecionando = eventoDeOrigen.target;
  selecionando.className = 'color selected';
}

clickSelecionar[0].addEventListener("click", recebeclickPaleta);
clickSelecionar[1].addEventListener("click", recebeclickPaleta);
clickSelecionar[2].addEventListener("click", recebeclickPaleta);
clickSelecionar[3].addEventListener("click", recebeclickPaleta);



let tentando;

const board = document.querySelector("#pixel-board")

function recebiClickPixel(event) {
  let selecionandoPixel = event.target;
  if (selecionandoPixel.classList.contains('pixel')) {
    let selecionado = document.querySelector('.selected')
    let corSelecionada = window.getComputedStyle(selecionado)
    let cor = corSelecionada.getPropertyValue('background-color')
    selecionandoPixel.style.backgroundColor = cor;
  }
}
board.addEventListener("click", recebiClickPixel);


function apagandoPixels() {
  let todosOsPixels = document.querySelectorAll('.pixel')
  for (let index = 0; index < todosOsPixels.length; index++) {
    todosOsPixels[index].style.background = 'white'
  }
}

function removeQuadro() {
  let quantidadeTotal = quantidadePixel.length
  for (let index = 0; index < quantidadeTotal; index++) {
    board.removeChild(quantidadePixel[0])

  }

}

function adicionandoPixels(event) {
  let quantidade = inputPixels.value
  if (quantidade === '') {
    alert("Board inválido!");
  }
  else if (quantidade < 5) {
    removeQuadro()
    criandoDivs(5)
  }
  else if (quantidade > 50) {
    removeQuadro()
    criandoDivs(50)
  }
  else {
    removeQuadro()
    criandoDivs(quantidade);
  }
  inputPixels.value = ''
}

buttonVQV.addEventListener('click', adicionandoPixels)
buttonClean.addEventListener('click', apagandoPixels)