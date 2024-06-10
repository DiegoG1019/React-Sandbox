import GameAction from "./GameAction";

class GameState{
    History: GameAction[];
    CurrentPlayer: number;
    State: number[][];

    constructor(){
        this.History = [];
        this.CurrentPlayer = 1;
        this.State = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
    }

    public PerformMove(row: number, col: number): number{
        let x = this.CurrentPlayer;
        this.History.push(new GameAction(x, row, col));
        this.State[row][col] = x;
        this.CurrentPlayer = this.CurrentPlayer == 1 ? 2 : 1;
        return x;
    }
}

export default GameState;