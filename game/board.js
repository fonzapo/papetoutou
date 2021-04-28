class Board {
    constructor(ctx, width, height){
        this._ctx = ctx;
        this._c_width = width;
        this._c_height = height;
    }
    fillBoard() {
        this._ctx.fillStyle = '#000000';
        this._ctx.fillRect(0, 0, this._c_width, this._c_height);
        console.log(this._c_width);
        console.log(this.c_height)
    }
}

export default Board;