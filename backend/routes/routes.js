const express = require("express")
const { createNewReminder, getTheReminder, getAllTheReminders, editTheReminder, deleteTheReminder } = require("../controllers/reminder");
const routes = express.Router()

routes.post('/create', createNewReminder);
routes.get('/get/:id', getTheReminder);
routes.get('/', getAllTheReminders);
routes.put('/edit/:id', editTheReminder);
routes.delete('/:id', deleteTheReminder);




module.exports = routes;