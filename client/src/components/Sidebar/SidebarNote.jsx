import React from 'react';
import {useDispatch} from 'react-redux';
import { deleteNote } from '../../actions/notes';

const SidebarNote = ({note, currentId, setCurrentId}) =>{

     const dispatch = useDispatch();

     const handleDelete = () => {
          dispatch(deleteNote(note._id));
          setCurrentId(null);
     }
     return (
          <div className={`app-sidebar-note ${note._id === currentId && "active"}`} onClick={() => setCurrentId(note._id)}>
               <div className="sidebar-note-title">
                    <strong> {note.title} </strong>
                    <button onClick={() => handleDelete()}> Borrar </button>
               </div>
               <p> {note.body && note.body.substr(0, 100) + "..."}</p>
               <small className="note-meta"> Última modificación {new Date(note.lastModified).toLocaleString('es-Es')} </small>
          </div>
     );
}

export default SidebarNote;