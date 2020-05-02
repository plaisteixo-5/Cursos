function mostraAlerta() {
    alert("Botão foi clicado.");
}
//primeira aula
//Caso queira ver o funcionamento colocar no HTML
/*{ <div id="app">
        <button onclick="mostraAlerta()">Me pressiona</button>
        <button onmouseover="mostraAlerta()">Me pressiona</button>
        <input onkeypress="mostraAlerta()">
    </div> }*/

var inputElement = document.getElementById('nome');//Busca um elemento com o Id nome
console.log(inputElement)

var inputElement2 = document.getElementsByTagName('input');//retorna um vetor de todas as tags input. Caso queira apenas o primeiro input utilizar as chaves. Ex: document.getElementsByTagName('input')[0];

var inputElement3 = document.getElementsByClassName('nome')[0];//retorna sempre um vetor também;
console.log(inputElement3);

var inputElement4 = document.querySelector('input');
//Outras formas de pegar o elemento:
// input[name=nome];
//body div#app input
//O querySelector retorna apenas um valor
//O querySelectorAll retorna todos os valores com o tipo informado;
console.log(inputElement4);

var btnElement = document.querySelector('button.botao')
var inputElement5 = document.querySelector('input[name=nome');

btnElement.onclick = function() {
    // var text = inputElement5.value;
    // alert(text);
    console.log(btnElement,inputElement5);
}