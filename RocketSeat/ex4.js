function experiencia(anos) {

}

let anosEstudo = 7;
let result = experiencia(anosEstudo);
if (result === 1 || result === 0) {
    console.log("Iniciante");
} else if (result > 1 && result <= 3){
    console.log("Intermediário");
} else if (result > 3 && result <= 6){
    console.log("Avançado");
} else{
    console.log("Jedi Master");
}