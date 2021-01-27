const express = require('express');
const router = express.Router();
const noteCtrl = require('../controllers/note.controller');

router.post('/', async (req, res) => {
  await noteCtrl.create(req.body);
  res.status(201).json('note was created');
});

router.get('/user/:user', async (req, res) => {
  const allNotes = await noteCtrl.findByUser(req.params);
  res.json(allNotes);
});

router.get('/:id', async (req, res) => {
  const note = await noteCtrl.findById(req.params);
  note ? res.json(note) : res.status(404).json('note was not found');
});

router.put('/:id', async (req, res) => {
  await noteCtrl.update(req.params, req.body);
  res.json('note was updated');
});

router.delete('/:id', async (req, res) => {
  await noteCtrl.remove(req.params);
  res.json('note was deleted');
});

module.exports = router;
