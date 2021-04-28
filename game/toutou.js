class Toutou {
    constructor(x, y, ctx) {
        this._player_x = x;
        this._player_y = y;
        this._ctx = ctx;
    }
    draw() {
        this._ctx.fillStyle = '#ffffff';
        this._ctx.fillRect(this._player_x, this._player_y, 100, 100);
        //console.log(this._player_x, this._player_y)
    }
    get player_pos() {
        return (this._player_x, this._player_y)
    }
};

class Pape extends Toutou {};
class Jaja extends Toutou{};

export default Toutou;