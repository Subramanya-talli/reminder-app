import React, {useState, useEffect} from 'react'
import Loading from '../components/Loading';
import axios from 'axios'

const AllReminders = () => {
  const [loading, setloading] = useState(false);
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    setloading(true);
    axios
      .get("http://localhost:3050/reminders/all")
      .then((response) => {
        setloading(false);
        console.log(response.data);
        setReminders(response.data);
      })
      .catch((error) => {
        console.error(
          "Error fetching reminder:",
          error.response || error.message
        );
        setloading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {reminders.map((reminder) => (
            <ul key={reminder._id} className="m-4 flex  alien-center">
              <div className="flex flex-col  alien-center">
              <strong>{reminder.eventTitle}</strong> - {reminder.description}
              <br />
              <em>{new Date(reminder.date).toLocaleDateString()}</em> - Repeat:{" "}
              {reminder.repeat}
              </div>
              <hr />
            </ul>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AllReminders