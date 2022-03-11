import mongoose from 'mongoose';
import NotesMessage from '../models/notesMessages.js';

export const getNotes = async (req, res) => {
     try{
          const notes = await NotesMessage.find();
          res.status(200).json(notes);

     }catch(error){
          res.status(404).json({message: error.message});
     }
}

export const createNote = async (req, res) => {
     const note = req.body; 
     const newNote = new NotesMessage(note);

     try{
          await newNote.save();
          res.status(201).json(newNote);

     }catch(error){
          res.status(409).json({message: error.message});
     }
};

export const updateNote = async (req, res) => {
     try {
          const {id: _id} = req.params;
          const note = req.body;

          if(!mongoose.Types.ObjectId.isValid(_id)){
               return res.status(404).send("NINGUNA NOTA CON ESE ID.");
          }

          const updateNote = await NotesMessage.findByIdAndUpdate(_id, {...note, _id}, {new: true});

          res.json(updateNote);
     } catch (error) {
          console.log(error);
     }
}

export const deleteNote = async (req, res) => {
     try {
          const {id: _id} = req.params;

          if(!mongoose.Types.ObjectId.isValid(_id)){
               return res.status(404).send("NINGUNA NOTA CON ESE ID.");
          }

          await NotesMessage.findByIdAndRemove(_id);

          res.json({
               message: '¡Nota eliminada correctamente!',
          });
     } catch (error) {
          console.log(error);
     }
}