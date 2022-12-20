
import { useSelector } from 'react-redux';
import { getStatusContact } from 'redux/selectors';

import { HContactForm } from './ContactForm/HContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {

  const contacts = useSelector(getStatusContact)

    return (
      <>
        <h1>Phonebook</h1>
        <HContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    )
}
  