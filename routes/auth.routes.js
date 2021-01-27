const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth.controller');
const userCtrl = require('../controllers/users.controller');
const auth = require('../middlewares/auth');

router.post('/sign-up', async (req, res) => {
  const user = await userCtrl.create(req.body);
  if (user) return res.json('user was created');
  res.status(403).json('some error');
});

router.post('/sign-in', async (req, res) => {
  const { email, password } = req.body;
  const result = await authCtrl.signIn(email, password);
  res.json(result);
});

router.post('/secure', auth, (req, res) => {
  res.json('informaicon valiosa, solo usuarios autorizados!!!');
});

router.post('/sign-off/', async (req, res) => {
  res.json('sign-off');
});

module.exports = router;
