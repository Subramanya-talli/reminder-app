import React, { useState } from "react";
import BackButton from "../components/backButton";

const NewReminder = () => {
  const [reminder, setreminder] = useState([]);
  return (
    <div className="min-h-screen flex flex-col items-center ">
      <div className="flex fle text-3xl m-10 text-black font-medium">
        Create A New Reminder
      </div>

      <div className="my-4 w-full max-w-5xl h-auto white p-8 rounded-lg shadow-md">
        <div className="mt-i">
          <div className="flex items-center justify-between gap-10">
            <div className="w-1/2">
              <label
                htmlFor="event-title"
                className="text-xl mr-4 text-gray-600"
              >
                Event Title
              </label>
              <input
                type="text"
                id="event-title"
                className="border-2 border-gray-200 px-4 py-3 w-full rounded-md my-1"
                required
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="new-date" className="text-xl mr-4 text-gray-600">
                Date
              </label>
              <input
                type="date"
                id="new-date"
                className="border-2 border-gray-200 px-4 py-3 w-full rounded-md my-1"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-8 my-6">
            <div className="w-1/2">
              <label htmlFor="repeat" className="text-xl mr-4 text-gray-600">
                Repeat
              </label>
              <select
                name="repeat"
                id="repeat"
                className="border-2 border-gray-200 px-4 py-2 w-full rounded-md mt-1"
              >
                <option value="">Select Repeat</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
                <option value="None">None</option>
              </select>
            </div>
            <div className="w-1/2">
              <label htmlFor="priority" className="text-xl mr-4 text-gray-600">
                Priority
              </label>
              <select
                name="priority"
                id="priority"
                className="border-2 border-gray-200 px-4 py-2 w-full rounded-md mt-1"
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
              </select>
            </div>
          </div>
          <div>
            <div className="w-full">
              <label
                htmlFor="description"
                className="text-xl mr-4 text-gray-600"
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                className="border-2 border-gray-200 px-4 py-2 w-full h-24 rounded-md mt-1"
              />
            </div>
          </div>
          <div className="mt-8 mr-1 flex items-center justify-end">
            <button className="shadow-md p-2 bg-blue-500 rounded-sm text-white text-l">
              Create Reminder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReminder;
