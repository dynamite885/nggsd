const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

cell_colors = ["rgb(220, 220, 220)", "rgb(0, 250, 250)", "rgb(250, 250, 0)", "rgb(150, 0, 150)", 
"rgb(250, 120, 0)", "rgb(0, 0, 250)", "rgb(0, 200, 0)", "rgb(200, 0, 0)"]

const I = [[0, 1], [1, 1], [2, 1], [3, 1], 1];
const O = [[0, 0], [0, 1], [1, 0], [1, 1], 2];
const T = [[0, 1], [1, 0], [1, 1], [2, 1], 3];
const L = [[0, 1], [1, 1], [2, 0], [2, 1], 4];
const J = [[0, 0], [0, 1], [1, 1], [2, 1], 5];
const S = [[0, 1], [1, 0], [1, 1], [2, 0], 6];
const Z = [[0, 0], [1, 0], [1, 1], [2, 1], 7];
const X = [[0, 1], [1, 0], [1, 1], [1, 2], [2, 1], 8];
var matrix = Array.from(Array(40), () => Array(10).fill(0));

class mino{
    constructor(m){
        this.m = m;
    }
    drawMino() {
        ctx.fillStyle = cell_colors[this.m[4]];
        for(let i=0; i<this.m.length-1; i++){
            ctx.fillRect (400+1+this.m[i][0]*40, 400+1+this.m[i][1]*40, 38, 38)
        }
    }
    eraseMino() {
        ctx.fillStyle = cell_colors[0];
        for(let i=0; i<this.m.length-1; i++){
            ctx.fillRect (400+1+this.m[i][0]*40, 400+1+this.m[i][1]*40, 38, 38)
        }
    }
}

class field{
    constructor(f){
        this.f = f;
    }
    drawField() {
        for(let i=0; i<this.f.length; i++) {
            for(let j=0; j<this.f[0].length; j++) {
                ctx.fillStyle = cell_colors[this.f[i][j]];
                ctx.fillRect (200+j*40, i*40, 38, 38)
            }
        }
    }
}

function keyDown() {
    console.log(event.keyCode)
}

var nowmino = new mino(O);
nowmino.drawMino();
nowmino.eraseMino();

var newField = new field(matrix);
newField.drawField()
document.onkeydown = keyDown;
console.log(matrix)
// ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
// ctx.fillRect (0, 0, 800, 800);
// ctx.fillStyle = "rgb(255, 0, 0)";
// ctx.fillRect (30, 30, 50, 50);



