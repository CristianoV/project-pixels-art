let elementoDiv = document.getElementsByTagName('section');

function criandoDivs(multiplo){
    for (let index = 0; index < multiplo; index += 1) {
        let makeDiv = document.createElement('div');
        makeDiv.className= "quantidade"
        elementoDiv[0].appendChild(makeDiv);
    }
    for (let index = 0; index < multiplo; index++) {
        let conta = 0;
        for (let index = 0; index < multiplo; index++) {
            let test = document.getElementsByClassName('quantidade')
            let test1 = document.createElement('div')
            test1.className= "pixel"
            test[conta].appendChild(test1)
            conta = conta+1;
        }
    }
}

criandoDivs(5);

let clickSelecionar = document.querySelectorAll('#color-palette div')
let clickSelecionarPixel = document.querySelectorAll('.pixel')

function apagando(test){
    for (let index = 0; index < 4; index++) {
        test[index].className ='color'
        
    }
}


function recebeclickPaleta(eventoDeOrigen){
    apagando(clickSelecionar);
    let selecionando = eventoDeOrigen.target;
    selecionando.className='color selected';
}

clickSelecionar[0].addEventListener("click", recebeclickPaleta);
clickSelecionar[1].addEventListener("click", recebeclickPaleta);
clickSelecionar[2].addEventListener("click", recebeclickPaleta);
clickSelecionar[3].addEventListener("click", recebeclickPaleta);



let tentando;

const board = document.querySelector("#pixel-board")

function recebiClickPixel(event){
    let selecionandoPixel = event.target;
    if (selecionandoPixel.classList.contains('pixel')) {
        let selecionado = document.querySelector('.selected')
        let corSelecionada = window.getComputedStyle(selecionado)
        let cor = corSelecionada.getPropertyValue('background-color')
        selecionandoPixel.style.backgroundColor = cor;
    }
}
board.addEventListener("click", recebiClickPixel);