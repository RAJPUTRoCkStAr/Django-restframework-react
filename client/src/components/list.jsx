import React from 'react';
import './style.css'

function List({ note, onDelete }) {
    return (
        <div className="note-container">
            <p className="note-title">{note.name}</p>
            <p className="note-content">{note.jersey_no}</p>
            <p className="note-content">{note.salary}</p>
            <p className="note-content">{note.country_name}</p>
            <p className="note-content">{note.occupation}</p>
            <p className="note-content">{note.gender}</p>
            <img className='note-content' src={note.profile_image} alt="Player Profile" />
            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Delete
            </button>
        </div>
    );
}

export default List;

