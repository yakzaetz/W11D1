import React from "react";

class Board extends React.Component {

    // render() {
    //     debugger 
    //     return null;
    // }
    
    render() { 
        const realTiles = this.props.board.grid
        const rows = realTiles.map((row, idx1) => {
            const tiles = row.map((tile, idx2) => {

            })
        }
        

        return (
            <div {this.props.board.grid.map((row, idx) => 
                <div {row}/>
                <div {row.map((tile, idx)) => 
                    <div tile/>
                }/>
            )} />
        )
    }
}

export default Board;