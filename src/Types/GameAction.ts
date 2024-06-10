
class GameAction{
    Action: number;
    Row: number;
    Col: number;

    constructor(action: number, row: number, col: number){
        if (action !== 1 && action !== 2)
            throw "action must be either 1 ('x') or 2 ('o')";
        if (row < 0 || row > 2)
            throw "row must be within 0 and 2";
        if (col < 0 || col > 2)
            throw "col must be within 0 and 2";

        this.Row = row;
        this.Col = col;
        this.Action = action;
    }

    public Redo(state: number[][]){
        state[this.Row][this.Col] = this.Action;
    }
    
    public Undo(state: number[][]){
        state[this.Row][this.Col] = 0;
    }
}

export default GameAction;