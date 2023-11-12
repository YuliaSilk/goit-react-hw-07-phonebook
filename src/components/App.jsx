// import {  useEffect, useState } from "react";
// import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactsForm/ContactsForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactsList/ContactsList";
import { ContactHeaderStyle, ContactsContainer, PhonebookContainer } from "./Contacts/Contacts.styled";
import { FormTittle } from "./ContactsForm/ContactsForm.styled";
// import Notiflix from 'notiflix';
import { useSelector } from "react-redux";
import { selectContacts } from "redux/selectors";


export const App = () => {
  const contacts = useSelector(selectContacts)

  return (
    <PhonebookContainer>
      <FormTittle>Phonebook</FormTittle>
      <ContactForm />
      <ContactsContainer>
      <ContactHeaderStyle>Contacts</ContactHeaderStyle>
      <Filter />
      {contacts.length > 0 && (  <ContactList />)}
      </ContactsContainer>
    </PhonebookContainer>
  )
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


// const onChangeFilter = (evt) => {
//   setFilter(evt.target.value);
// };

// const filterContacts = () => {
//  return contacts.filter((contact) =>  {
//   return  contact.name.toLowerCase().includes(filter.toLowerCase());
// });
// };


// return (
//   <PhonebookContainer>
//     <FormTittle>Phonebook</FormTittle>
//     <ContactForm 
//     toAdd={addContact}/>
//     <ContactsContainer>
//     <ContactHeaderStyle>Contacts</ContactHeaderStyle>
//     <Filter 
//     onChange = {onChangeFilter} filterName={filter}/>
//     <ContactList 
//     contacts = {filterContacts()}
//     onDeleteContact={deleteContact}
//     />
//     </ContactsContainer>
//   </PhonebookContainer>
// )

// }











