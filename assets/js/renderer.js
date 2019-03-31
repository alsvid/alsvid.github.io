let angle = 0;
let icing;
let rotationDirection = "x";

function preload() {
    icing = loadImage("assets/images/icing.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(175);
    rectMode(CENTER);
    translate(mouseX - width/2, mouseY - height/2);
    rotateX(angle);
    fill(50);
    rotate
    texture(icing);
    torus(100, 50);
    angle += 0.035;
    console.log(angle)
}