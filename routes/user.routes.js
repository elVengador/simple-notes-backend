const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users.controller');

router.post('/', async (req, res) => {
  await userCtrl.create(req.body);
  res.status(201).json('user was created');
});

router.get('/', async (req, res) => {
  const allUsers = await userCtrl.find({});
  res.json(allUsers);
});

router.get('/:id', async (req, res) => {
  const user = await userCtrl.findById(req.params);
  user ? res.json(user) : res.status(404).json('user was not found');
});

router.put('/:id', async (req, res) => {
  await userCtrl.update(req.params, req.body);
  res.json('user was updated');
});

router.delete('/:id', async (req, res) => {
  await userCtrl.remove(req.params);
  res.json('user was deleted');
});

module.exports = router;
