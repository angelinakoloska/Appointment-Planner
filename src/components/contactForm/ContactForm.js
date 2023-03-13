import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
        type='text'
        name="Name"
        value={name} 
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Name"
        />
      </label>
      <label>
        <input 
          type='tel'
          name='Phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          // required
          placeholder='Phone' 
          />
      </label>
      <label>
        <input 
        type='email'
        name="Email"
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Email"
        />
      </label>
      <input type='submit' value='Add Contact' />
    </form>
  );
};
