import { Request, Response } from 'express';

let allnotes = [
  { noteId: 1, noteTitle: 'Todays Activities', noteContent: 'This is a new note' },
  { noteId: 2, noteTitle: 'Instructions', noteContent: 'Dont leave without signing out' },
];

export const createNote = (req: Request, res: Response) => {
  const note = req.body;
  allnotes.push(note);
  res.status(201).json(note);
};

export const getAllNotes = (req: Request, res: Response) => {
  res.status(200).json(allnotes);
};

export const getNoteById = (req: Request, res: Response) => {
  const noteId = parseInt(req.params.id);
  const note = allnotes.find((n) => n.noteId === noteId);
  if (!note) {
    res.status(404).json({ message: 'Note does not exist' });
  } else {
    res.status(200).json(note);
  }
};

export const updateNote = (req: Request, res: Response) => {
  const noteId = parseInt(req.params.id);
  const updatedNote = req.body;
  const index = allnotes.findIndex((n) => n.noteId === noteId);
  if (index === -1) {
    res.status(404).json({ message: 'Note does not exist' });
  } else {
    allnotes[index] = updatedNote;
    res.status(200).json(updatedNote);
  }
};

export const deleteNote = (req: Request, res: Response) => {
  const noteId = parseInt(req.params.id);
  const index = allnotes.findIndex((n) => n.noteId === noteId);
  if (index === -1) {
    res.status(404).json({ message: 'Note does not exist' });
  } else {
    allnotes.splice(index, 1);
    res.status(204).end();
  }
};
