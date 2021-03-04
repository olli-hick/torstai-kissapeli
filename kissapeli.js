let tasutakuva;
let kissakuva;
let kissa;

let taustan_korkeus = 400;
let taustan_leveys = 800;
let lautan_leveys = 50;
let lautan_korkeus = 20;
let lautan_y = taustan_korkeus - 50;

function preload() {
  taustakuva = loadImage("https://igno.cc/opetus/kuvat/tausta.png");
  kissakuva = loadImage("https://igno.cc/opetus/kuvat/cat.png");
}

function setup() {
  kissa = new Kissa();
  var canvas = createCanvas(taustan_leveys, taustan_korkeus);
  angleMode(DEGREES);
}

function draw() {
  image(taustakuva, 0, 0, taustan_leveys, taustan_korkeus);
  luo_lautta();
  kissa.liikuta();
}


function luo_lautta() {
  fill('rgba(0, 255, 0, 0.25)');
  if (mouseX > taustan_leveys) {
    rect(taustan_leveys - 20, lautan_y, lautan_leveys, lautan_korkeus, 30, 30, 10, 10);
  } else {
    rect(mouseX, lautan_y,lautan_leveys, lautan_korkeus, 30, 30, 10, 10);

  }


}


class Kissa {
  constructor() {
    this.X = 30;
    this.Y = 200;
    this.korkeus = 50;
    this.leveys = 50;
    this.xNopeus = 2;
    this.yNopeus = -2;
    this.kulma = 0;
  }
  liikuta() {

    this.X += this.xNopeus;
    this.yNopeus += 0.05;
    this.Y += this.yNopeus;

    if (this.Y + this.korkeus > lautan_y) {
      if (this.X > mouseX && this.X < mouseX + lautan_leveys) {
        this.yNopeus = -abs(this.yNopeus);
      }
    }

    this.kulma += 1;


    push();
    translate(this.X, this.Y);
    rotate(this.kulma);
    imageMode(CENTER);
    image(kissakuva, 0, 0, this.leveys, this.korkeus);
    pop();
  }
}
