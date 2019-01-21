import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newNoteContent: ''
        };
    }

    // Set newNoteContent to the new value of the text field (onChange)
    handleUserInput = (e) => {
        this.setState({
            newNoteContent: e.target.value
        })
    }

    writeNote = () => {

        this.props.addNote(this.state.newNoteContent);

        // Set newNoteContent back to an empty string
        this.setState({
            newNoteContent: ''
        });
    }

    render() {
        return (
            <div className="FormWrapper">
                <input className="noteInput" placeholder="Write a new note..." value={this.state.newNoteContent} onChange={this.handleUserInput} />
                <button className="noteButton" onClick={this.writeNote}>Add Note</button>
            </div>
        )
    }
}

export default NoteForm;