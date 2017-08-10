const express = require('express');

const controller = require('../controllers/note.controller');

let note = express.Router();

note.get('/getAll', controller.getAll);
note.get('/:id', controller.get);
note.get('/check/:id', controller.check);

module.exports = note;