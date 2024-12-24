


// Used to build all note easily dynamically

import React from 'react'
import '../styles/Note.css'

function Note({note, onDelete}) {

    // const formattedDate = new Date(note.created_at).toLocaleDateString("in-US")
    const formattedDateTime = new Date(note.created_at).toLocaleString("ne-NP", {timeZone: "Asia/Kathmandu",});


    return (
        <div className='note-container'>
        
            <p className="note-title"> <b> Title : {note.title}</b></p>
            <p className="note-content"> <i>{note.content}</i></p>
            <p className="note-date">{}</p>
            <button className="note-delete-button" onClick={() => onDelete(note.id)}> Delete </button>
        
        </div>
    )
}

export default Note