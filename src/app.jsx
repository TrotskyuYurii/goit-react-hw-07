import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

export function App() {

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox />
      <ContactList/>
    </div>
  );
}
