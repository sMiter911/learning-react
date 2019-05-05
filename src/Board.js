import React, { Component } from 'react';
import Note from './Note'

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [
                {
                    id: 33,
                    note: "Call Tyrone"
                },
                {
                    id: 34,
                    note: "Do Laundry"
                },
                {
                    id: 35,
                    note: "Get shit done"
                }
            ]
        }
        this.eachNote = this.eachNote.bind(this)
    }

    eachNote(note, i) {
        return (
            <Note key={i} index={i}>
                {note.note}
            </Note>
        )
    }

    render () {
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
            </div>
        )
    }
}

export default Board