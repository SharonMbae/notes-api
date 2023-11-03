import express from 'express';
import { createNote, getAllNotes, getNoteById, updateNote, deleteNote } from '../controllers/notescontrollers';

const router = express.Router();

router.post('/allnotes', createNote);
router.get('/allnotes', getAllNotes);
router.get('/allnotes/:id', getNoteById);
router.put('/allnotes/:id', updateNote);
router.delete('/allnotes/:id', deleteNote);

export default router;
