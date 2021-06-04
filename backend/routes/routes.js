// this will handle the routes for our requests.
const { response } = require('express');
const express = require('express');
const signupTemplate = require('../models/signupModels');
// bcrypt for encryption of passwords.
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/signup', async (request, response)=>{
  // secure password.
  const saltPwd = await bcrypt.genSalt(10);
  const hashedPwd = await bcrypt.hash(request.body.password, saltPwd);


  const signedUpUser = new signupTemplate({
    fullName: request.body.fullName,
    username: request.body.username,
    email: request.body.email,
    password: hashedPwd
  });
  signedUpUser.save()
    .then((data) => {
      response.json(data);
    })
    .catch((err) => {
      response.json(err);
    })
})

module.exports = router;
