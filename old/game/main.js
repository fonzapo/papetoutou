import Toutou from './toutou.js';

let toutou;

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const c_width = 800;
const c_height = 600;

canvas.width = c_width;
canvas.height = c_height;

const setup = () => {
    toutou = new Toutou(ctx);
};

const draw = () => {
    ctx.clearRect(0, 0, c_width, c_height);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, c_width, c_height);

    toutou.show();
    toutou.update();
};

setup();
draw();
