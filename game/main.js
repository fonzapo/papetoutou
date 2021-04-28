class Toutou {
    constructor(x, y, ctx) {
        this._x = x;
        this._y = y;
        this._ctx = ctx;
    }
    show() {
        const img = new Image();
        img.onload = () => {
            this._ctx.drawImage(img, this._x, this._y, 100, 80);
        }
        img.src = '../assets/img/sprites/pape/pape.png';
    }
}

let toutou;

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const c_width = 800;
const c_height = 600;

canvas.width = c_width;
canvas.height = c_height;

const setup = () => {
    toutou = new Toutou(100, 200, ctx);
};

const draw = () => {
    ctx.clearRect(0, 0, c_width, c_height);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, c_width, c_height);
    toutou.show();
};

setup();
draw();
