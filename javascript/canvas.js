const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

cell_colors = ["rgb(245, 245, 245)", "rgb(0, 250, 250)", "rgb(250, 250, 0)", "rgb(150, 0, 150)", 
"rgb(250, 120, 0)", "rgb(0, 0, 250)", "rgb(0, 200, 0)", "rgb(200, 0, 0)", "rgb(30, 30, 30)"]

const I = [[0, 1], [1, 1], [2, 1], [3, 1], [1, 0], [3, 19]];
const O = [[0, 0], [0, 1], [1, 0], [1, 1], [2, 0], [3, 19]];
const T = [[0, 1], [1, 0], [1, 1], [2, 1], [3, 0], [3, 19]];
const L = [[0, 1], [1, 1], [2, 0], [2, 1], [4, 0], [3, 19]];
const J = [[0, 0], [0, 1], [1, 1], [2, 1], [5, 0], [3, 19]];
const S = [[0, 1], [1, 0], [1, 1], [2, 0], [6, 0], [3, 19]];
const Z = [[0, 0], [1, 0], [1, 1], [2, 1], [7, 0], [3, 19]];
const X = [[0, 1], [1, 0], [1, 2], [2, 1], [8, 0], [3, 19]];
const matrix = Array.from(Array(40), () => Array(10).fill(0));

class mino{
    constructor(m){
        this.m = m;
    }
    drawMino(f) {
        for(let i=0; i<this.m.length-2; i++){
            f[this.m[5][1]+this.m[i][1]][this.m[5][0]+this.m[i][0]] = this.m[4][0];
        }
    }
    eraseMino(f) {
        for(let i=0; i<this.m.length-2; i++){
            f[this.m[5][1]+this.m[i][1]][this.m[5][0]+this.m[i][0]] = 0;
        }
    }
    moveMino(toX, toY) {
        this.m[5][0] += toX;
        this.m[5][1] += toY;
    }
}

class field{
    constructor(f){
        this.f = f;
    }
    drawField() {
        for(let i=19; i<this.f.length; i++) {
            for(let j=0; j<this.f[0].length; j++) {
                ctx.fillStyle = cell_colors[this.f[i][j]];
                ctx.fillRect (200+j*40, i*40-780, 38, 38)
                
            }
        }
    }
}



var nowmino = new mino(X);
var newField = new field(matrix);
nowmino.drawMino(newField.f);
newField.drawField()

function keyDown() {
    nowmino.eraseMino(newField.f);
    if(event.keyCode == 37) {
        nowmino.moveMino(-1, 0);
    }
    else if(event.keyCode == 39) {
        nowmino.moveMino(1, 0);
    }
    else if(event.keyCode == 38) {
        nowmino.moveMino(0, -1);
    }
    else if(event.keyCode == 40) {
        nowmino.moveMino(0, 1);
    }
    nowmino.drawMino(newField.f);
    newField.drawField();
    console.log(event.keyCode);
}
document.onkeydown = keyDown;
// ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
// ctx.fillRect (0, 0, 800, 800);
// ctx.fillStyle = "rgb(255, 0, 0)";
// ctx.fillRect (30, 30, 50, 50);



