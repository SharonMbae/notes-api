import express, { Request, Response, json, request, response } from 'express'
const {}= require('mysql')

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


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
