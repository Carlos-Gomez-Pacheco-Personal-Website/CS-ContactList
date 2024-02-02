// export default function ContactRow({ contact }) {
//     return (
//       <tr>
//         <td>{contact.name}</td>
//         <td>{contact.email}</td>
//         <td>{contact.phone}</td>
//       </tr>
//     );
//   }

// Pass callback funtion //

import PropTypes from "prop-types";
function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}

ContactRow.propTypes = {
  setSelectedContactId: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }),
};

export default ContactRow;
