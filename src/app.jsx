import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsOps.js';

import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

export function App() {

  // Отримання масиву контактів
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);



  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox />
      <ContactList/>
    </div>
  );
}
