const mongoose = require("mongoose")

const reminderSchema = mongoose.Schema({
    eventTitle :{
        type: String,
        required:true,
        trim: true
    },
    description:
    {
        type: String
    },
    date:{
        type: String,
        required: true
    },
    repeat:
    {
        type: String,
        Enumerator: ["None", "Weekly", "Monthly", "Yearly"],
        default: "None",
    },
    priority:{
        type: String,
        Enumerator : ["Low", "Medium", "High"]
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
},
{
    timestamps: true
});

const Reminders = mongoose.model("Reminder", reminderSchema);

module.exports = Reminders;

