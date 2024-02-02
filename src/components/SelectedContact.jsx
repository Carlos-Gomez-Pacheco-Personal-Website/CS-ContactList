import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, [selectedContactId]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <button onClick={() => setSelectedContactId(null)}>Back to list</button>
    </div>
  );
}

SelectedContact.propTypes = {
  selectedContactId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  setSelectedContactId: PropTypes.func.isRequired,
};

export default SelectedContact;
