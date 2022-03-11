import express from 'express';
import {getNotes, createNote, updateNote, deleteNote} from '../controllers/notes.js';

const router = express.Router();

router.get('/', getNotes);
router.post('/', createNote);
router.patch('/:id', updateNote);
router.delete('/:id', deleteNote);

// will redirect all the non-api routes to react frontend
router.use(function(req, res) {
     res.sendFile(path.join(__dirname, '../client','build','index.html'));
});

export default router;