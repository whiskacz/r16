import React from 'react'
import { DivStyle, DivStyleRed, Icons } from './NoteStyle'
import { SlClose } from "react-icons/sl";

export default function NewNote( {note, text, color, deleteNote} ) {
    console.log(color)
  return (
    <DivStyle>
        <div>{color}</div>
        <DivStyleRed style={{backgroundColor:`${color}`}}>
            <Icons>
                <SlClose onClick={deleteNote(note.id)}/>
            </Icons>
        </DivStyleRed>
       
        <textarea value={text} style={{
            margin:"10px 5px",
            textAlign:"center",
            minWidth:"130px",
            minHeight:"130px",
            maxWidth:"740px"
        }}></textarea>
    </DivStyle>
  )
}
