import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "../ContactList/ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const usersContact = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name.toLowerCase());

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  // Фільтруємо
  const filteredContacts = usersContact.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      <ul className={css.ContactListUl}>
        {filteredContacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
