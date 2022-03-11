import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateNote} from '../../actions/notes';

const NoteEdit = ({currentId}) =>{
     const dispatch = useDispatch();
     const note = useSelector((state) => currentId ? state.notes.find( (note) => note._id === currentId) : null); 

     useEffect(() => {
          if(note) setNoteData(note);
     }, [note]);

     const [noteData, setNoteData] = useState(note);

     const onEditField = (key, value) =>{
          setNoteData({
               ...noteData,
               [key]: value,
               lastModified: Date.now(),
          });
     };


     return (
          <div className="app-main-note-edit">
               <button onClick={() => dispatch(updateNote(currentId, noteData))}> Guardar Nota </button>
               <input
                    type="text"
                    id="title"
                    value={noteData.title}
                    onChange={(e) => onEditField('title', e.target.value)}
                    autoFocus
               />
               <textarea
                    id="body"
                    value={noteData.body}
                    onChange={(e) => onEditField('body', e.target.value)}
                    placeholder="Escribe tu nota aquí"
               />
          </div>
     );
}

export default NoteEdit;