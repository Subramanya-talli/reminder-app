const User = require("../models/user");

async function createNewUser(request, responce)
{
    try {
        const {name, email, password } = request.body;
        console.log(request.body)
        if(!request.body)
        {
            return responce.status(500).json({message : "User is not created, please provide all the necessary details"});
        }

        const user = await User.create({
            name, 
            email, 
            password
        });

        user.save();
        return responce.status(200).json(user)
    } catch (error) {
        responce.status(400).json({message: error.message});
    }
}

async function editUserInfo(request, responce)
{
    try {
        const {name, email, password } = request.body;
        const {id} = request.params;
        if(!id)
        {
            return responce.status(400).json({message : "User Id is required"});
        }

    
        const updateFields = {};
        if(name){ updateFields.name = name}
        if(email){ updateFields.email = email}
        if(password){ updateFields.password = password}

        const user = await User.findByIdAndUpdate(
            id,
            { $set: updateFields },
            { new: true }   
        );

        if (!user) {
            return response.status(404).json({ message: "User not found" });
        }

        return responce.status(200).json(user)
    } catch (error) {
        responce.status(500).json({message: error.message});
    }
}

module.exports = {
    createNewUser,
    editUserInfo
}