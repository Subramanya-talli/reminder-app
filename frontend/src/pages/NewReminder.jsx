import React, { useState } from "react";

const NewReminder = () => {
  const [reminder, setreminder] = useState([]);
  return (
    <div className="min-h-screen bg-grey-800">
      <div className="flex flex-col items-center justify-center ">
        <div className="text-3xl text-black mt-10 font-medium">Create A New Reminder</div>
        <div className="my-5 ">
         <div className="flex flex-col justify-center border-2 border-black-500 rounded-xl w-[500px] p-4 max-auto mt-8">
         <div>
         <label htmlFor="event-title" className="text-xl mr-4 text-grey-600">
              Event Title
            </label>
            <input type="text" id="event-title" className="border-2 border-black px-4 py-2 w-full rounded-md my-1" required/>
         </div>
         <div>
         <label htmlFor="new-date" className="text-xl mr-4 text-grey-600">
              Date
            </label>
            <input type="date" id="new-date" className="border-2 border-black px-4 py-2 w-full rounded-md my-1" required/>
         </div>
         <div className="flex flex-col">
         <label htmlFor="repeat" className="text-xl mr-4 text-grey-600">
              Repeat
            </label>
           <select name="repeat" id="repeat">
           <option value="">Select Repeat</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly" >Yearly</option>
            <option value="None" >None</option>
           </select>
         </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default NewReminder;
