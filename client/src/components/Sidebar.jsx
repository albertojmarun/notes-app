import React from 'react';
import { useSelector } from 'react-redux';
import SidebarHeader from './Sidebar/SidebarHeader';
import SidebarNote from './Sidebar/SidebarNote';

export const Sidebar = ({currentId, setCurrentId}) => {
     const notes = useSelector( (state) => state.notes);
     const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

     return (
          <div className="app-sidebar">
               <SidebarHeader />
               <div className="app-sidebar-notes">
                    { sortedNotes.map( (note) => (<SidebarNote key={note._id} note={note} currentId={currentId} setCurrentId={setCurrentId}/> )) }
               </div>
          </div>
     );
}