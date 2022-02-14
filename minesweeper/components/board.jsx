import React from "react";

class Board extends React.Component {
    
    render() { 
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