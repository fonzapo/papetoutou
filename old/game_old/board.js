import Toutou from './toutou.js';

class Board {
    constructor(ctx, width, height) {
        this._ctx = ctx;
        this._c_width = width;
        this._c_height = height;

        //variables pour controler le framerate dans la boucle;
        this._fps = 30;
        this._now;
        this._then = Date.now();
        this._interval = 1000 / this._fps;
        this._delta;

        //position du toutou;
        this._toutouX = 0;
        this._toutouY = 300;

        //vitesse
        this._velocity = 1;
        this._gravity = 1;
    }
    update() {
        this._toutouY += this._gravity;
        window.addEventListener('keydown', (event) => {
            console.log(`KEYDOWN ${event.code}`);
            switch (event.code) {
                case 'ArrowRight':
                    this._toutouX += this._velocity;
                    break;
            }
        });
    }
    drawBoard() {
        //cette partie sert à controler le framerate (j'ai copié collé un code parce que j'ai pas tout compris mais apparemment c'est simple)
        window.requestAnimationFrame(this.drawBoard.bind(this));

        this._now = Date.now();
        this._delta = this._now - this._delta;
        if (this._delta > this._interval) {
            this._then = this._now - (this._delta % this._interval);
        }

        this._ctx.fillStyle = '#ffffff';
        this._ctx.fillRect(0, 0, this._c_width, this._c_height);

        this.update();
        const toutou = new Toutou(this._toutouX, this._toutouY, this._ctx);
        toutou.draw();
    }
}

export default Board;