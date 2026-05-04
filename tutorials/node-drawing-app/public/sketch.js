var socket;

function setup() {
    createCanvas(1200, 800);
    background(51);

    socket = io.connect('http://127.0.0.1:3000');
    socket.on('mouse', newDrawing);
}

function newDrawing(data) {
    noStroke();
    fill(215, 0, 215);
    ellipse(data.x, data.y, 30, 30);
}

function mouseDragged() {
    console.log('Sending: ' + mouseX + ',' + mouseY);

    var data = {
        x: mouseX,
        y: mouseY
    }

    socket.emit('mouse', data);

    noStroke();
    fill(0);
    ellipse(mouseX, mouseY, 30, 30);
}