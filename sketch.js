let plantas = []
let contadorPlantas = 0;
let objetivoPlantas = 100; 
let tempoRestante = 60;
let estadoJogo = "INICIO"; // INICIO, JOGANDO, GANHOU, PERDEU
let intervaloTimer = null; // Inicializar como null

// Cores
let corCeu;
let corTerra;
let corArroz;
let corTexto;

let distanciaMinimaEntrePlantas = 15;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(24);
  
  corCeu = color(135, 206, 250);
  corTerra = color(139, 69, 19);
  corArroz = color(34, 139, 34);
  corTexto = color(0);
  // console.log("Setup: Estado inicial =", estadoJogo);
}

function draw() {
  background(corCeu);
  noStroke();
  fill(corTerra);
  rect(0, height * 0.7, width, height * 0.3); // Chão
}
  
  // Desenhar o "agricultor"
  if (estadoJogo !== "GANHOU" && estadoJogo !== "PERDEU") { // Não desenha se o jogo acabou
    fill(255, 224, 189); // Cor de pele
    ellipse(mouseX, mouseY - 20, 30, 30); // Cabeça
    fill(0, 0, 200); // Azul para a roupa 
    rect(mouseX - 10, mouseY - 5, 20, 30,); // Corpo
  }
  // Desenhar plantas
for (let planta of plantas) {
  fill(corArroz);
  ellipse(planta.x, planta.y, 10, 15);
  ellipse(planta.x - 5, planta.y + 2, 8, 12);
  ellipse(planta.x + 5, planta.y + 2, 8, 12);
 }

 // Lógica de Estados e Interface 
 if (estadoJogo === "INICIO") {
   fill(CorTexto);
   textSize(32);
   text("Clique para começar a plantar!", width / 2, height / 2 - 50);
   textSize(18);
   text("Você tem 1 minuto para plantar 100 pés de arroz.", width / 2, height / 2);
 } else if (estadoJogo === "JOGANDO") {
   fill(corTexto);
   textSize(20);
   text(`Tempo: ${tempoRestante}`, 70, 30);
   text(`Plantas: ${contadorPlantas} / ${objetivoPlantas}`, width - 100, 30);
   
   // Checa vitória
   if (contadorPlantas >= objetivoPlantas) {
     estadoJogo = "GANHOU";
     pararJogo(); // Chama pararJogo aqui também para limpar timer e parar o loop.
   }
    // Checa derrota por tempo (esta é uma checagem secundária, a primária está no timer)
   // Se o timer mudar o estado para PERDEU, este bloco não será mais "JOGANDO no próximo frame.
   // Mas se o tempo acabar  e o timer ainda não rodou para mudar o estado, o o draw pode pegar. 
   else if (tempoREstante <= 0) { // Se não ganhou E o tempo acabou 
            // A condição `contadorPlantas < objetivoPlantas` é implícita aqui,
     // pois se fosse >=, teria entrando no if de GANHOU.
     estadoJogo = "PERDEU";
     pararJogo(); 
   }
   
 } else if (estadoJogo === "GNAHOU") {
   fill(0, 128, 0); // Verde para vitória 
   textSize(40);
   txt("Você CONSEGUIU!", width / 2, height / 2); 
  