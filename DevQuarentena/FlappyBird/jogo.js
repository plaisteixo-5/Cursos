console.log('[DevSoutinho] Flappy Bird');
console.log('Inscreva-se no canal :D https://www.youtube.com/channel/UCzR2u5RWXWjUh7CwLSvbitA');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y:canvas.height - 112,
    desenha(){
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY, //sprete X, sprite Y
            chao.largura, chao.altura, //Tamanho do recorte na sprite 
            chao.x, chao.y, 
            chao.largura, chao.altura
        );

        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY, //sprete X, sprite Y
            chao.largura, chao.altura, //Tamanho do recorte na sprite 
            chao.x + chao.largura, chao.y, 
            chao.largura, chao.altura
        );
    }
}

const planoDeFundo = {
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y:canvas.height - 204,
    desenha(){

        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0, 0, canvas.width, canvas.height);

        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY, //sprete X, sprite Y
            planoDeFundo.largura, planoDeFundo.altura, //Tamanho do recorte na sprite 
            planoDeFundo.x, planoDeFundo.y, 
            planoDeFundo.largura, planoDeFundo.altura
        );

        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY, //sprete X, sprite Y
            planoDeFundo.largura, planoDeFundo.altura, //Tamanho do recorte na sprite 
            planoDeFundo.x + planoDeFundo.largura, planoDeFundo.y, 
            planoDeFundo.largura, planoDeFundo.altura
        );
    }
}

const flapBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,

    velocidade: 0,
    gravidade: 0.25,


    atualiza(){
        flapBird.velocidade = flapBird.velocidade + flapBird.gravidade;
        console.log(this.velocidade);
        flapBird.y = flapBird.y + this.velocidade;
    },

    desenha(){
        contexto.drawImage(
            sprites,
            flapBird.spriteX, flapBird.spriteY, //sprete X, sprite Y
            flapBird.largura, flapBird.altura, //Tamanho do recorte na sprite 
            flapBird.x, flapBird.y, 
            flapBird.largura, flapBird.altura
        );
    }
}

function loop(){
    
    planoDeFundo.desenha();

    flapBird.desenha();

    chao.desenha();

    flapBird.atualiza();

    requestAnimationFrame(loop);
}

loop();