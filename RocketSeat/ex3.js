function temHabilidade(skills) {
    if (skills.indexOf("JavaScript",0) === -1)
    return false;
    else return true;
}

const skills = ["JavaScript", "ReactJs", "React Native"];
var msg = (temHabilidade(skills) === true) ? "O usuário sabe" : "O usuário não sabe";
console.log(msg);