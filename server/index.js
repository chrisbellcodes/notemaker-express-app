const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const notes = [
  { id: 1, note: "This is note 1." },
  { id: 2, note: "Note 2 is this." },
  { id: 3, note: "There are notes for 3 as well." }
];

app.get("/", (req, res) => {
  res.send("Yas World");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find(note => note.id === parseInt(req.params.id));
  if (!note) res.status(404).send("This note can not be found.");
  res.status(200).send(note);
});

app.post("/api/notes", (req, res) => {
  if (!req.body.note) {
    res.status(404).send("Provide us with a note");
  }
  const newNote = {
    id: notes.length + 1,
    note: req.body.note
  };
  notes.push(newNote);
  res.status(200).send(newNote);
});

app.put("/api/notes/:id", (req, res) => {
  res.send();
});

app.delete("/api/notes/:id", (req, res) => {
  res.send();
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on Port ${port}`));
