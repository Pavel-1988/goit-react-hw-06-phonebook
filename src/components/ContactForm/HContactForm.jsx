
import { useState } from 'react';
import { FormContainer, ListSpan } from './ContactForm.styled';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
// import { Report } from 'notiflix/build/notiflix-report-aio';

export const HContactForm = ({onSubmit, contactsName }) => {
   
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const filterName = contactsName.some(
      contactName => contactName.toLowerCase() === name.toLowerCase()
    );
    if (filterName) {
      // Report.warning(
      //     `${name}`,
      //     'This user is already in the contact list.',
      //     'OK')
		return  Notiflix.Notify.failure('You already have a contact with that name');
    }
     const newContact = {
      id: nanoid(),
      name,
      number,
    };

    onSubmit(newContact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

   return (
      <FormContainer  onSubmit={onSubmitForm}>
        <label >
          <ListSpan >Name</ListSpan>
          <input
            onChange={onHandleChange}
            type="text"
            name="name"
            value={name}
            id={nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label  >
          <ListSpan >Number</ListSpan>
          <input
            onChange={onHandleChange}
            type="tel"
            name="number"
            value={number}
            id={numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
          <button  type="submit">
          Add contact
        </button>
    </FormContainer>
    )
}

HContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contactsName: PropTypes.arrayOf(PropTypes.string.isRequired),
};