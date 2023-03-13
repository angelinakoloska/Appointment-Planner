import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const {contacts, addContact} = props;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [duplicate, setDuplicate] = useState(false);
 
  useEffect(() => {
    checkForDuplicates();
  }, [name]);

  const checkForDuplicates = () => {
    if (contacts.length > 0) {
      const duplicates = contacts.filter(contact => contact.name === name);
      if (duplicates.length > 0) {
        setDuplicate(true);
      } else {setDuplicate(false);}
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };


  
  return (
    <div>
      <section>
        <h2>
          Add Contact
          {duplicate ? " - Name Already Exists" : ""}
        </h2> 
        <ContactForm 
          name={name} setName={setName}
          phone={phone} setPhone={setPhone} 
          email={email} setEmail={setEmail} 
          handleSubmit={handleSubmit} 
          />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};