//Criando  Classe Bird e Seus Métodos
//Criando flap bird e seus métodos
//método 01 exibe()
//metodo 02 update()
// metodo 03 up

let bird;

function setup() {
  createCanvas(400, 400);
  bird = new Bird(25,width/2)
  
}

function draw() {
  background(0);
  bird.exibi();
  bird.update()
  
}


///----------------Função Precionar Espaço---------------------------------
function keyPressed(){
  if(key === ' '){
    bird.up();
  }
}