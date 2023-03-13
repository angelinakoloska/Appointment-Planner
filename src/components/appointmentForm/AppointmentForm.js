import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactsName = () => {
    return contacts.map((contact) => contact.name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
        type='text'
        name="Title"
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="title"
        />
      </label>
      <label>
        <ContactPicker 
          contacts={getContactsName()}
          onChange={(e) => setContact(e.target.value)}
        />
      </label>
      <label>
        <input 
          type='date'
          name='Date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={getTodayString()}
          required
          placeholder='date' 
          />
      </label>
      <label>
        <input 
        type='time'
        name="Time"
        value={time} 
        onChange={(e) => setTime(e.target.value)}
        required
        placeholder="time"
        />
      </label>
      <input type='submit' value='Add Contact' />
    </form>
  );
};
