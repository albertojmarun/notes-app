import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
     title: String,
     body: String,
     lastModified: {
          type: Date,
          default: new Date
     },
});

const NotesMessage = mongoose.model('NoteMessage', noteSchema);

export default NotesMessage;