const express = require('express');
const router = express.Router();
const tagCtrl = require('../controllers/tag.controller');
const noteCtrl = require('../controllers/note.controller');
const auth = require('../middlewares/auth');

router.post('/', auth, async (req, res) => {
  await tagCtrl.create(req.body);
  res.status(201).json('tag was created');
});

router.get('/user/:user', auth, async (req, res) => {
  const tagsFromUser = await tagCtrl.findByUser(req.params);
  res.json(tagsFromUser);
});

router.get('/:id', auth, async (req, res) => {
  const tag = await tagCtrl.findById(req.params);
  tag ? res.json(tag) : res.status(404).json('tag was not found');
});

router.put('/:id', auth, async (req, res) => {
  await tagCtrl.update(req.params, req.body);
  res.json('tag was updated');
});

router.delete('/:id', auth, async (req, res) => {
  await noteCtrl.removeByTag(req.params);
  await tagCtrl.remove(req.params);
  res.json('tag and their notes was deleted');
});

module.exports = router;
