class Toutou {
    constructor(ctx) {
        this._x = 20;
        this._y = 50;
        this._width = 100;
        this._height = 80;
        this._ctx = ctx;

        this._gravity = 1;
        this._velocity = 0;
    }
    show() {
        //this._ctx.clearRect(0, 0, 800, 600)
        const img = new Image();
        img.onload = () => {
            this._ctx.drawImage(img, this._x, this._y, this._width, this._height);
        }
        img.src = '../assets/img/sprites/pape/pape.png';
    }
    update() {
        this._velocity += this._gravity;
        this._y += this._velocity;
        //this._y += 1;
        //console.log(this._y)
    }
    get posX() {
        return this._x;
    }
    get posY() {
        return this._y;
    }
}

export default Toutou;