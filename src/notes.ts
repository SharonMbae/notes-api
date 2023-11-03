import express, { Request, Response, json, request, response } from 'express'

const app=express()

app.use(json ())

app.use ((error:Error, req: Request, res: Response)=>{
    res.json({
        message:error.message
    })
})


app.listen(5000, ()=>{
    console.log('server is running')
});

let allnotes=[
    {noteId: 1 , noteTitle: 'Todays Activities', noteContent: 'This is a new note'},
    {noteId: 2 , noteTitle: 'Instructions', noteContent: 'Dont leave without signing out '}
]

app.post('/allnotes', (req: Request, res: Response)=>{
    const note1= req.body;
    res.status(201).json(note1);
});

app.get('/allnotes', (req:Request, res:Response)=>{
    res.status(200).json(allnotes);
});

app.get('/allnotes',(req:Request, res:Response)=>{
    const noteId = parseInt(req.params.id);
  const note = allnotes.find((n) => n.noteId === noteId);
  if (!note) {
    res.status(404).json({ message: 'Note does not exist' });
  } else {
    res.status(200).json(note);
  }

});

app.put('/allnotes/:id', (req:Request, res:Response) => {
  const noteId = parseInt(req.params.id);
  const updatedNote = req.body;

  const index = allnotes.findIndex((n) => n.noteId === noteId);
  if (index === -1) {
    res.status(404).json({ message: 'Note does not exist' });
  } else {
    allnotes[index] = updatedNote;
    res.status(200).json(updatedNote);
  }
});

app.delete('/notes/:id', (req, res) => {
      const noteId = parseInt(req.params.id);
      const index = allnotes.findIndex((n) => n.noteId === noteId);
      if (index === -1) {
        res.status(404).json({ message: 'Note does not exist' });
      } else {
        allnotes.splice(index, 1);
        res.status(204).end(); 
      }
    });

    app.delete('/notes/:id', (req: Request, res:Response) => {
          const noteId = parseInt(req.params.id);
          const index = allnotes.findIndex((n) => n.noteId === noteId);
          if (index === -1) {
            res.status(404).json({ message: 'Could not find the note' });
          } else {
            allnotes.splice(index, 1);
            res.status(204).end(); 
          }
        });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
