//Aula de Introdução
var nome = "Felipe";
var idade = 19;
var peso = 59.9;
var humano = true;

var alunos = ['Felipe', 'Marcelo', 'Mirela'];//vetor

var aluno = {//objeto
    nome: alunos[2],
    idade: 19,
    peso: 59.9,
    humano: true
};

console.log(alunos[2]);
//mostra Marcelo
console.log(aluno.aluno);
//mostra o peso do aluno
//Para acessar qualquer objeto a gente utiiliza o ponto

var sexo = 'M';
var masculino = sexo === 'M';//se for igual a 'M' ele retorna True

var retorno = (sexo === 'M') ? 'Masculino' : 'Feminino'

function exibeAlgo() {
    console.log('Hello world!');
};

setInterval(exibeAlgo, 1000);//Não colocou o abre e o fecha parenteses pq a função tá sendo passada como parâmetro
//Executa sempre de 1 em 1 segundo

setTimeout(exibeAlgo,5000);//executa em 5 segundos