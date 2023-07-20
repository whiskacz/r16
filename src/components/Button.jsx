import React from 'react'
import { ButtonStyle } from './NoteStyle'

export default function Button({addNewNote}) {
  return (
<ButtonStyle onClick={addNewNote}>
New note
</ButtonStyle> 
  )
}
