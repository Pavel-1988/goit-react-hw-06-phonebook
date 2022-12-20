import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/ContactSlice';
import { getStatusFilter, getStatusContact } from 'redux/selectors';
import {List,  ListItem } from './ContactList.styled';


export function ContactList() {
  
  const filter = useSelector(getStatusFilter);
  const contacts = useSelector(getStatusContact)
  const dispatch = useDispatch();

  const contactsList = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter))
  }

  const deleteContacts = (contactId) => {
    dispatch(deleteContact(contactId))
  }

  return (
    <List>
      {contactsList().map(({id, name, number}) => (
        <ListItem key={id}>
          <p>
            {name} : {number}
          </p>          
          <button onClick={() => deleteContacts(id)}>
            Delete
          </button>
        </ListItem>
      ))}
     </List>
 )
};



// ContactList.propTypes = {
// 	contactsList: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			id: PropTypes.string.isRequired,
// 			name: PropTypes.string.isRequired,
// 			number: PropTypes.string.isRequired,
// 		 })
// 		).isRequired,
// 	onDeleteContact: PropTypes.func.isRequired,
// }
