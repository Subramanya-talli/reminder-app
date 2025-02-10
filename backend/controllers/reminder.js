const reminders = require("../models/reminder");

async function createNewReminder(req, res){
    try {
        const { eventTitle, description, date, repeat, priority } = req.body;

    if(!req.body)
        {
            return res.status(500).json({message : 'All the things are required'})
        }

    const newReminder = await reminders.create({
        eventTitle, description, date: new Date(date), repeat, priority
    });

    newReminder.save();
    return res.status(200).json(newReminder);
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

const getTheReminder = async function(req, res){
    try {
        const { id } = req.params
        if(!id)
        {
            return res.status(500).json({message: "There is no Event"})
        }
        const getEvent = await reminders.findById(id);

        return res.status(200).json(getEvent);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

async function getAllTheReminders(req,res){
    // const { } = req.body;
    try {
        const remindersOfADay = await reminders.find();
        if (!remindersOfADay) {
            return res.status(500).json({message: "No reminders for Today"});
        }
        return res.status(200).json(remindersOfADay);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}


async function editTheReminder(req, res)
{
    try {
        const { id } = req.params
        const reminder = await reminders.findByIdAndUpdate(id)
        console.log(reminder)
        if (!reminder) {
            return res.status(500).json({message : "Reminder Does Not Exist"});
        }

        return res.status(200).json(reminder);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

async function deleteTheReminder(req, res)
{
    try {
        const { id } = req.params
        const reminder = await reminders.findByIdAndDelete(id)
        if (!reminder) {
            return res.status(500).json({message : "Reminder Does Not Exist"});
        }

        return res.status(200).json({message : "Rmeinder Is deleted SucsussFully"});
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}


module.exports = {
    createNewReminder,
    getTheReminder,
    getAllTheReminders,
    editTheReminder,
    deleteTheReminder
}