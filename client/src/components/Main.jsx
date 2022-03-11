import React from 'react';
import NoteEdit from './Main/NoteEdit';

export const Main = ({note, currentId}) =>{
     if(!currentId){
          return(
               <div className="no-active-note">
                    No hay Nota Activa.
               </div>
          );
     }

     return (
          <div className="app-main">
               <NoteEdit note={note} currentId={currentId}/>
          </div>
     );
}