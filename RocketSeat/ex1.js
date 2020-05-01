var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function mostra(obj) {
    let msg = "O usuário mora em "+obj.cidade+" / "+obj.uf+", no bairro "+obj.bairro+" com número "+obj.numero;
    return  msg;
}

console.log(mostra(endereco));