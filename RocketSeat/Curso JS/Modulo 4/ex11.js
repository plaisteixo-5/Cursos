var elementList = document.querySelector('ul');
var elementInput = document.querySelector('input');

function configuraBagui(repositorio) {
    for(item of repositorio) {
        const elementT = document.createTextNode(item.name)
        const elementI = document.createElement('li');

        elementI.appendChild(elementT);
        elementList.appendChild(elementI);
    }
}


function listaRepo(){
    let user = elementInput.value;

    axios.get('https://api.github.com/users/'+user+'/repos')
    .then(function(response){
        configuraBagui(response.data);
    })
    .catch(function(erro){
        console.warn('Deu n man')
    })
}