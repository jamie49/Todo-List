import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component {

    constructor (props){
        super(props);
        this.noteId = props.noteId;
        this.noteContent = props.noteContent;
    }

    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    render(props){
        return(
            <div className="note fade-in">
                <span className="closeButton" onClick={() => this.handleRemoveNote(this.noteId)}>&times;</span>
                <p className="noteContent">{ this.noteContent }</p>
            </div>
        )
    }
}

Note.PropTypes = {
    noteContent: PropTypes.string
}

export default Note;