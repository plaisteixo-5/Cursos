var elementList = document.querySelector('ul');
var elementInput = document.querySelector('input');

function configuraBagui(repositorio) {

    elementList.innerHTML = '';

    for(item of repositorio) {
        const elementT = document.createTextNode(item.name)
        const elementI = document.createElement('li');

        elementI.appendChild(elementT);
        elementList.appendChild(elementI);
    }
}

function erroLoad() {
    elementList.innerHTML = '';

    let elementT = document.createTextNode('Erro. Usuário não encontrado');
    let elementL = document.createElement('p');

    elementL.appendChild(elementT);
    elementList.appendChild(elementL);
    
}

function load() {
    elementList.innerHTML = '';

    let elementT = document.createTextNode('Carregando...');
    let elementL = document.createElement('li');

    elementL.appendChild(elementT);
    elementList.appendChild(elementL);

}

function listaRepo(){
    let user = elementInput.value;

    load();

    axios.get('https://api.github.com/users/'+user+'/repos')
    .then(function(response){
        console.log(response.data)
        configuraBagui(response.data);
    })
    .catch(function(erro){
        erroLoad();
    })
}