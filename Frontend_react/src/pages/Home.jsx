

import React, { useEffect, useState } from 'react'
import api from "../api"
import Note from '../components/Note';
import '../styles/Home.css'

function Home() {


    const [notes, setNotes] = useState([]);  //initially note should be empty
    const [content, setContent] = useState(""); //initially note content should be empty
    const [title, setTitile] = useState("");  //initially note title should be empty


    // useEffect call and get all the Notes of the user as soon as he visit the page
    useEffect( () => {
        getNotes();
    }, [] ) 


    // arrow function to get all notes written by the verified specific user
    const getNotes = () => {
        api
        .get("/api/notes/")
        .then((response) => response.data)
        .then((data) => {setNotes(data); console.log(data); })
        .catch((error) => alert(error));
    };

    // arrow function to delete the existing notes 
    const deleteNote = (id) => {
        api.delete(`/api/notes/delete/${id}/`)
        .then((response) => {
            if (response.status === 204) {
              alert("Delete Note")   //status code 204 means successfully deleted
            }
            else {
                alert ("Failed to delete Note! ")
            }
            // Now updating and showing new list of notes after deleting the desired note
            getNotes();
        })
        .catch ((error) => alert(error));
    }

    // arrow funciton to create the new notes
    const createNote = (e) => {
        e.preventDefault()
        api.post("/api/notes/", {content, title})
        .then((response) => {
            if(response.status === 201 ){
                alert("Note created successfully.");  // response status 201 is for successful creation 
            }
            else {
                alert("Failed to create Note !");
            }
            // Now updating and showing new list of notes after creating the new note
            getNotes();
        })
        .catch ((error) => alert(error));
    } 

    return (
        <div>

            <h2 className='text-center'> Create a Note </h2>
            <form className='note-form' onSubmit={createNote}>

                <label htmlFor="title"> Title: </label>
                <br />

                <input 
                    type="text" 
                    id='title' 
                    name='title' 
                    placeholder='Note Title...'
                    required 
                    onChange={(e) => setTitile(e.target.value)} 
                    value={title} 
                />

                <label htmlFor="content"> Content: </label>
                <br />

                <textarea
                    name="content" 
                    id="content" 
                    required 
                    value={content} 
                    placeholder='Enter your text here...' 
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />

                <input type="submit" value="Submit" />

            </form>

            {/* CONTAINER TO SHOW THE AVAILABLE NOTES OF THE USER */}
            <div className='Note-div'>
                <h2 className='text-center'> Your Notes </h2>
                {notes.map((note) => 
                    <Note note={note} onDelete={deleteNote} key={note.id} />
                )}
            </div>

        </div>
    )
}

export default Home