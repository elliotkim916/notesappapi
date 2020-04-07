// this is for routing note related requests
'use strict';

const router = require('express').Router();
const noteController = require('../controllers/noteController');

router
  .route('/edit/:id')
  .put(noteController.editNoteById);

router
  .route('/:id')
  .get(noteController.getNoteById)
  .delete(noteController.deleteNote);

router
  .route('/')
  .post(noteController.createNote)
  .get(noteController.getAllNotes);

module.exports = router;