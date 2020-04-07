'use strict';

const Note = require('../../db/models/note');

module.exports = {
  getAllNotes: async (req, res) => {
    let allNotes;

    try {
      allNotes = await Note.find();
    } catch(e) {
      console.log('Get All Notes Error', e);
      return res.status(404).send(e);
    }

    return res.status(200).send(allNotes);
  },
  getNoteById: async (req, res) => {
    const { params: { id } } = req;
    let noteById;

    try {
      noteById = await Note.findById(id);
    } catch(e) {
      console.log('Get Note By ID Error', e);
      return res.status(404).send(e);
    }

    return res.status(200).send(noteById);
  },
  createNote: async (req, res) => {
    const { title, content } = req.body;
    console.log(req.body);
    let newNote;

    try {
      newNote = await new Note({ title, content });
      await newNote.save();
      return res.status(201).json(newNote);
    } catch(e) {
      console.log('Create New Note Error', e);
      return res.status(500).send(e);
    }
  },
  deleteNote: async (req, res) => {
    const { params: { id } } = req;

    try {
      await Note.findByIdAndDelete(id);
      console.log(`Deleted Note with id ${id}`);
      return res.status(204).end();
    } catch(e) {
      console.log('Delete Note Error', e);
      return res.status(404).send(e);
    }
  },
  editNoteById: async (req, res) => {
    const{ params: { id }, body: { title, content } } = req;
   
    try {
      await Note.findByIdAndUpdate(id, {
        title,
        content
      });
      return res.status(204).end();
    } catch(e) {
      console.log('Edit Note Error', e);
      return res.status(402).send(e);
    }
  }
}