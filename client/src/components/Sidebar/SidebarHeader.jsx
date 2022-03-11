import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import {createNote} from '../../actions/notes';

const SidebarHeader = (notes, setNotes) =>{
     const dispatch = useDispatch();

     const [noteData, setNoteData] = useState({
          id: uuid(),
          title: 'Nueva Nota',
          body: '',
          lastModified: Date.now(),
     });

     const handleCreateNote = (e) =>{
          e.preventDefault();

          setNoteData({
               title: 'Nueva Nota',
               body: '',
               lastModified: Date.now(),
          });
          
          dispatch(createNote(noteData));
     };
     
     return (
          <div className="app-sidebar-header">
               <h1>Notas</h1>
               <button onClick={handleCreateNote}> Añadir </button>
          </div>
     );
}

export default SidebarHeader;