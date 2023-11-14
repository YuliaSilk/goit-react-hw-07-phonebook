import { Contact } from "components/Contacts/Contacts";
import { ContactsList, ContactContainer } from './ContactsList.styled';
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/selectors";


export const ContactList = () => {
    const visibleContacts = useSelector(selectVisibleContacts);

    return (
        <ContactContainer>
            <ContactsList>
                {visibleContacts.map(contact => 
                   <Contact
                    key={contact.id}
                    contact={contact}
                    />
                    )}   
            </ContactsList>
        </ContactContainer>
    );
} 
