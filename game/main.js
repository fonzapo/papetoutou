class Toutou {
    constructor(x, y, ctx) {
        this._toutouX = x;
        this._toutouY = y;
        this._ctx = ctx;
    }
    show() {
        const img = new Image();
        img.src = '../assets/img/sprites/pape/pape.png';
        this._ctx.drawImage(img, this._toutouX, this._toutouY, 100, 80);
        /*ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, 100, 100)*/
    }
}

let toutou;

const canvas = document.querySelector('#canvas');
//ctx sert à définir le contexte (2d ou 3d);
const ctx = canvas.getContext('2d');

const c_width = 800;
const c_height = 600;

canvas.width = c_width;
canvas.height = c_height;

const setup = () => {
    toutou = new Toutou(100, 500, ctx);
};

const draw = () => {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, c_width, c_height);
    toutou.show();
};

setup();
draw();
