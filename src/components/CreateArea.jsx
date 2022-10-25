import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [status, setStatus] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setStatus(false)
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleExpand() {
    setStatus(true)
  }

  return (
    <div>
      <form  className="create-note">
        {status &&
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title" />
        }          
          <textarea
            name="content"
            onClick={handleExpand}
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows={status ? "3" : "1"} />
        
          <Zoom in={status}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        
        
      </form>
    </div>
  );
}

export default CreateArea;