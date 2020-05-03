// function mostraAlerta() {
//     alert("Botão foi clicado.");
// }
//primeira aula
//Caso queira ver o funcionamento colocar no HTML
/*{ <div id="app">
        <button onclick="mostraAlerta()">Me pressiona</button>
        <button onmouseover="mostraAlerta()">Me pressiona</button>
        <input onkeypress="mostraAlerta()">
    </div> }*/

// var inputElement = document.getElementById('nome');//Busca um elemento com o Id nome. Retorna apenas um valor
// console.log(inputElement)

// var inputElement2 = document.getElementsByTagName('input');//retorna um vetor de todas as tags input. Caso queira apenas o primeiro input utilizar as chaves. Ex: document.getElementsByTagName('input')[0];

// var inputElement3 = document.getElementsByClassName('nome')[0];//retorna sempre um vetor também. No caso está retornando apenas o primeiro;
// console.log(inputElement3);

// var inputElement4 = document.querySelector('input');
//Outras formas de pegar o elemento:
// input[name=nome];
//body div#app input
//O querySelector retorna apenas um valor
//O querySelectorAll retorna todos os valores com o tipo informado;
// console.log(inputElement4);

// var btnElement = document.querySelector('button.botao')
// var inputElement5 = document.querySelector('input[name=nome');

// btnElement.onclick = function() {
    // var text = inputElement5.value;
    // alert(text);
// }
// Para ver o funcionamento do programa usar o code
{/* <div id="app">
<input type="text" name="nome">
<button class="botao">Adicionar</button>
</div> */}

// var linkElement = document.createElement('a');
// linkElement.href = 'https://rocketseat.com.br';
// linkElement.setAttribute('href', 'https://rocketseat.com.br');
// linkElement.setAttribute('title', 'Site da Rocketseat');
//Colocando atributos à tag 'a'

// var textElement = document.createTextNode('Acessar site da rocketseat');
// Criando um texto pro elemento criado
// linkElement.appendChild(textElement);
// Colocandoesse texto no elemento

// var containerElement = document.querySelector('#app');
// containerElement.appendChild(linkElement);
//procurando algo com o ID "app" e colocando o elemento dentro

// var inputElement6 = document.querySelector('#nome')
// containerElement.removeChild(inputElement6);
// Removendo o input pelo Js
// containerElement.child
//Code para usar no HTML
{/* <div id="app">
        <input id="nome">
    </div> */}

    // var boxElement = document.querySelector('.box');

    // boxElement.style.width = '100px';
    // boxElement.style.height = '100px';
    // boxElement.style.backgroundColor = '#f00';
    //Definindo um estilo para a classe box;