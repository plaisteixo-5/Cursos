const usuarios = [
    {
        nome: "Felipe",
        habilidades: ["JavaScript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

let i = 0, j = 0;
let msg;
let msg1;
for(i ; i < 2 ; i++){
    msg = "O "+usuarios[i].nome+" possui as habilidades: ";
    msg1 = usuarios[i].habilidades.join(", ");
    msg += msg1;
    console.log(msg);
}