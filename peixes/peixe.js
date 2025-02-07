const config = { // adicionar configurações base para o site, com tamanho do cenário
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: { //criar subpastas
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config); //abrir as configurações do jogo e executar o Phaser junto ao jogo

let peixinho;
let tubarao;
var velocidadeTubarao = 2

function preload() { //upar todas as imagens a serem utilizadas
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/baiacu.png');
    this.load.image('tubarao', 'assets/peixes/tubarao.png');
}


function create() { //adicionar as imagens ao cenário
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);

    // guardar o peixe em uma variável
    peixinho = this.add.image(400, 300, 'peixe');

    //transformar a variável
    peixinho.setFlip(true, false);

    tubarao = this.add.image(400, 300, 'tubarao');
    tubarao.setFlip(true, false);
}


function update() {

    // adicionar controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

    // adicionar controles no tubarão
    tubarao.x += velocidadeTubarao;

    if (tubarao.x > 800) { //condicionar o retorno do tubarão à esquerda do bakground quando chegar ao fim da direita
        tubarao.x = 0;
    }
}

console.log (resposta) 
