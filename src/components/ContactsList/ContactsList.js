import { Contact } from "components/Contacts/Contacts";
import { ContactsList, ContactContainer } from './ContactsList.styled';
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { useMemo } from "react";
import { deleteContacts } from "redux/contactSlice"
// import { ContactItem } from "components/Contacts/Contacts.styled";


export const ContactList = () => {
const contacts = useSelector(getContacts);
const filter = useSelector(getFilter);
const setContacts = useMemo(() => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
}, [contacts, filter])

const dispatch = useDispatch();
const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
};

    return (
        <ContactContainer>
            <ContactsList>
               
                {setContacts.map(contact => 
                   
                   <Contact
                    key={contact.id}
                    contact={contact}
                    onDeleteContact={deleteContact}
                    />
                    )}
                   
            </ContactsList>
        </ContactContainer>
    );
}

// function addsaveContacts() {
//   const saveContacts = localStorage.getItem('addContacts');
//   if(saveContacts === null) {
//     return [];
//   }
//  return JSON.parse(saveContacts);
// };

// export const App = () => {
//   const [contacts, setContacts] = useState(addsaveContacts);
//   const [filter, setFilter] = useState('');

// useEffect(() => {
//   localStorage.setItem('addContacts', JSON.stringify(contacts));
// }, [contacts]);

// const addContact  = (newContact) => {
//       if (contacts.some(contact => contact.name === newContact.name)){
//     Notiflix.Notify.failure('this contact has already been added!');
//     return
//     }
//   setContacts(prevState => [...prevState, {...newContact, id: nanoid()}],
//  )};

// const deleteContact = (contactId) => {
//  setContacts(prevState =>  prevState.filter(contact => contact.id !== contactId))
// }
