
import React, { useState } from 'react';
import axios from 'axios';

function Reminders() {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('');

  const setReminder = async () => {
    await axios.post('http://localhost:5000/reminder', { task_name: task, scheduled_time: time });
    setTask('');
    setTime('');
    alert('Reminder set!');
  };

  return (
    <div>
      <h2>Set a Reminder</h2>
      <input type="text" value={task} placeholder="Task" onChange={(e) => setTask(e.target.value)} />
      <input type="datetime-local" value={time} onChange={(e) => setTime(e.target.value)} />
      <button onClick={setReminder}>Set Reminder</button>
    </div>
  );
}

export default Reminders;
