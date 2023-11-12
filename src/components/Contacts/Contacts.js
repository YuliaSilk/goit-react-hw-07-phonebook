import { useDispatch } from "react-redux";
import { ContactItem, DeleteBtn } from "./Contacts.styled"
import { deleteContact } from "redux/operations";


export const Contact = ({ contact: { id, name, number } }) => {
    const dispatch = useDispatch();
    const toDeleteContact = contactId => {
        dispatch(deleteContact(contactId));
    
}
return (
    <ContactItem>
        <p>{name}: {number}</p>
        <DeleteBtn type="button" 
        onClick={() => toDeleteContact(id)}>
            Delete
        </DeleteBtn>
    </ContactItem>
)}

