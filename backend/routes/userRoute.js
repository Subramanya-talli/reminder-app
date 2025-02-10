const express = require("express")
const routes = express.Router()
const { createNewUser, editUserInfo } = require('../controllers/user')


routes.post('/create', createNewUser);
routes.put('/edit/:id', editUserInfo);


module.exports = routes;