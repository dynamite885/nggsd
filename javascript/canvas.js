const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const I = [[0, 1], [1, 1], [2, 1], [3, 1], "rgb(0, 250, 250)"];
const O = [[0, 0], [0, 1], [1, 0], [1, 1], "rgb(250, 250, 0)"];
const T = [[0, 1], [1, 0], [1, 1], [2, 1], "rgb(150, 0, 150)"];
const L = [[0, 1], [1, 1], [2, 0], [2, 1], "rgb(250, 120, 0)"];
const J = [[0, 0], [0, 1], [1, 1], [2, 1], "rgb(0, 0, 250)"];
const S = [[0, 1], [1, 0], [1, 1], [2, 0], "rgb(0, 200, 0)"];
const Z = [[0, 0], [1, 0], [1, 1], [2, 1], "rgb(200, 0, 0)"];
const X = [[0, 1], [1, 0], [1, 1], [1, 2], [2, 1], "rgb(30, 30, 30)"];

class mino{
    constructor(m){
        this.m = m;
    }
    drawMino() {
        ctx.fillStyle = this.m[4];
        for(let i=0; i<this.m.length-1; i++){
            ctx.fillRect (400+1+this.m[i][0]*40, 400+1+this.m[i][1]*40, 38, 38)
        }
    }
}

var nowmino = new mino(O);
nowmino.drawMino()


// ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
// ctx.fillRect (0, 0, 800, 800);
// ctx.fillStyle = "rgb(255, 0, 0)";
// ctx.fillRect (30, 30, 50, 50);



