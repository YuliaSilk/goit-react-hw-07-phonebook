import { Formik } from "formik";
import * as Yup from 'yup';
import { AddBtn, FormName, FormStyle, FormField, ErrMsg, FormContainer } from "./ContactsForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "redux/selectors";
import Notiflix from "notiflix";
import { addContact } from "redux/operations";

const FormSchema = Yup.object().shape({
    name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' /-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Invalid name format')
    .min(2, 'Too short contacts name!')
    .max(15, 'Too long contacts name!')
    .required('Required'),

    phone: Yup.string()
    .matches(/^\+?\d{1,4}([ ./-]?\d{1,3})?([ ./-]?\d{1,4})+$/, 'Invalid phone number format')
    .required('Required'),
  });
  

  export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    return (
     <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={FormSchema}
        onSubmit={(values, actions) => {
          if (contacts.find(contact => contact.name === values.name.trim())) {
            Notiflix.Notify.failure('This contact has already been added!');
          } else {
            dispatch(addContact({
              id: '',
              name: values.name.trim(),
              phone: values.phone.trim(),
            }))
          };
          Notiflix.Notify.success('The contact succefully added!');
          actions.resetForm()
          
        }}
      >
        <FormStyle>
      
        <FormContainer>
       
        <FormName>Name 
          <FormField name="name" placeholder="Enter contact name" />
          <ErrMsg component="div" name="name" />
        </FormName>
        <FormName>Phone number
          <FormField name="phone" placeholder="Enter phone number" type="tel"/>
          <ErrMsg component="div" name="phone" />
        </FormName>

        <AddBtn type="submit">Add contact</AddBtn>
       
      </FormContainer>
      </FormStyle>
      </Formik>
    
  )};

