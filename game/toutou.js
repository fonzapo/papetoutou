class Toutou {
    constructor(x, y) {
        this._player_x = x;
        this._player_y = y;
    }

    get player_pos() {
        return (this._player_x, this._player_y)
    }
}

export default Toutou;