import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client'
import Button from './components/Button.jsx'
import NewNote from "./components/NewNote.jsx";
import { v4 as uuidv4 } from "uuid";

function R16App () {

    
    const [notes, setNote] = useState([])
    const [color,setColor] = useState("")

    const addNewNote = (newNote) => {
        const newNotes = [...notes, newNote]
        newNotes.filter((note) => !note.id && (note.id = uuidv4()))
        setNote(newNotes)
        console.log(notes)
    }
    useEffect(()=> {
        setColor(`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`)
        
    },[notes])


    const deleteNote = ( id ) => {
        
        setNote(notes.filter((note) => note.id !== id))
        
    }

    return (
        <div style={{display:"flex",
        flexDirection:"column", 
        justifyContent:"center",
        alignItems:"center"}}>
        <Button  addNewNote={addNewNote}/>
    
        <div style={{
            display:"flex",
            width:"800px",
            minHeight:"800px",
            backgroundColor:"#ddd",
            flexWrap:"wrap",
            justifyContent:"space-between",
            alignItems:"center",
            alignContent:"center"
        }}>
            {notes.map((note) => 
            (<NewNote 
                key={note.id} 
                note={note}
                color={color} 
                deleteNote={deleteNote}
                />))}
        </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<R16App />)