import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../components/Button";
import NewNote from "./NewNote";

export default function NotesApps() {
  const [notes, setNotes] = useState([]);

  const addNewNote = (newNote) => {
    const newNotes = [...notes, newNote];
    newNotes.filter((note) => !note.id && (note.id = uuidv4()));

    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const bgColors = ["#606c38", "#283618", "#fefae0", "#dda15e", "#bc6c25"];

  const randColor = () => bgColors[Math.floor(Math.random() * bgColors.length)];

  return (
    <div>
      <Button title={"Add New Note +"} onClick={addNewNote} />
      <div className="wrapper" style={{ display: "flex", flexWrap: "wrap" }}>
        {notes.map((note) => (
          <NewNote
            key={note.id}
            note={note}
            onClick={deleteNote}
            bgCardColor={randColor}
          />
        ))}
      </div>
    </div>
  );
}
