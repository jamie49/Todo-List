import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component {

    constructor (props){
        super(props);

        this.noteId = props.noteId;

        this.state = {
            originalNote: props.noteContent,
            noteContent: props.noteContent,
            noteChanged: false
        };
    }

    // Set newNoteContent to the new value of the text field (onChange)
    handleUserInput = (e) => {
        
        // If note has changed, show the save button
        if (this.state.originalNote !== e.target.value){
            this.setState({
                noteChanged: true
            })
        } else {
            this.setState({
                noteChanged: false
            })
        }

        this.setState({
            noteContent: e.target.value
        })
    }

    handleUpdateNote(id){
        this.props.updateNote(id, this.state.noteContent);
        
        // Reset back to unchanged after updating
        this.setState({
            originalNote: this.state.noteContent,
            noteChanged: false,
        })
    }    

    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    render(props){

        return(
            <div className="note fade-in">
                <input type="text" className="noteContent" value={ this.state.noteContent } onChange={this.handleUserInput} />
                <div className="buttonContainer">
                    <button className={"saveButton " + (this.state.noteChanged ? 'show' : 'hide')} onClick={() => this.handleUpdateNote(this.noteId)}></button>
                    <button className="closeButton" onClick={() => this.handleRemoveNote(this.noteId)}>&times;</button>
                </div>
            </div>
        )
    }
}

Note.propTypes = {
    noteContent: PropTypes.string
}

export default Note;