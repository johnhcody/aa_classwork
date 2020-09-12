import React from 'react';
import * as BoardActions from '../minesweeper';

// imporlt * as TodoActions from './todo_actions';
// // TodoActions now acts as a wrapper object for all the methods
// // defined in 'todo_actions.js'

// let todo = ...;
// TodoActions.createTodo(todo);

class Game extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            board: new BoardActions.Board()
        }
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(){
    }

    render() {
        return (
            <>
                <Board 
                    board={this.state.board}
                    updateGame={this.updateGame}
                />
            </>
        )
    }
}

export default Game;