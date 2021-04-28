import Toutou from './toutou.js'

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
        this._speedX = 1;
        this._speedY = -1;
    }
    eventHandle() {
        window.addEventListener('keydown', (event) => {
            console.log(`KEYDOWN ${event.code}`);
            switch (event.code) {
                case 'ArrowRight':
                    this._speedX += 1;
                    this._toutouX += this._speedX;
                    break;
                case 'Space':
                    this._speedY += 1;
                    this._toutouY += this._speedY;
                    break;

            }
        });
        window.addEventListener('keyup', (event) => {
            console.log(`KEYUP ${event.code}`);
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

        this._ctx.fillStyle = '#000000';
        this._ctx.fillRect(0, 0, this._c_width, this._c_height);

        const toutou = new Toutou(this._toutouX, this._toutouY, this._ctx);
        toutou.draw();
        //toutou.player_pos();
    }
}

export default Board;