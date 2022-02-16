let elementoDiv = document.getElementsByTagName('section');


function criandoDivs(primeiro, segundo){
    for (let index = 0; index < primeiro; index += 1) {
        let makeDiv = document.createElement('div');
        makeDiv.className= "quantidade"
        elementoDiv[0].appendChild(makeDiv);

    }
    for (let index = 0; index < segundo; index++) {
        let conta = 0;
        for (let index = 0; index < segundo; index++) {
            let test = document.getElementsByClassName('quantidade')
            let test1 = document.createElement('div')
            test1.className= "pixel"
            test[conta].appendChild(test1)
            conta = conta+1;
        }
    }

}

criandoDivs(5, 5);