import React from "react";
import * as Minesweeper from "../minesweeper";
import Board from "./board"
import Tile from "./tile";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {board: new Minesweeper.Board()}; 
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(){

    }

    render(){
        return(
            <div>
                <p>hellow world</p>
                <Board board={this.state.board} updateGame={this.updateGame} />
                <Tile/>
            </div>
        )
    }
}

export default Game;