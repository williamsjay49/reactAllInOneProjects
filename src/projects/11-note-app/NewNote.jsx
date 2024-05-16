import { NoteStyle, DeleteIcon, Icons, TextArea } from "./NoteStyle";
import { MdOutlineNoteAlt, MdDeleteForever } from "react-icons/md";

import React, { useState, useEffect } from "react";

export default function NewNote({ note, onClick, bgCardColor }) {
  const [bgCol, setBgCol] = useState();

  useEffect(() => !bgCol && setBgCol(bgCardColor), []);
  return (
    <NoteStyle>
      <Icons bgColor={bgCol}>
        <MdOutlineNoteAlt />
        <DeleteIcon>
          <MdDeleteForever onClick={() => onClick(note.id)} />
        </DeleteIcon>
      </Icons>
      <TextArea></TextArea>
    </NoteStyle>
  );
}
