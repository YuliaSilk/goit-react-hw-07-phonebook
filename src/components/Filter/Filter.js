import { nanoid } from '@reduxjs/toolkit';
import { FilterInputStyle, FilterStyle, TextToDo } from './Filter.styled'
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { onChangeFilter } from 'redux/filterSlice';

const contactId = nanoid();

export const Filter = () => {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();

    const onChange = (evt) => {
        const normalizeValue = evt.target.value.toLowerCase();
        dispatch(onChangeFilter(normalizeValue));
    }
    return (
        <FilterStyle>
          <TextToDo>Find contacts by name</TextToDo>
            <FilterInputStyle
            type="text"
            id={contactId}
            value={value}
            placeholder="Please, enter a name"
            onChange={onChange}
            />
        </FilterStyle>
    )
}



// const onChange = (evt) => {
//     setFilter(evt.target.value);
//   };
  
//   const filterContacts = () => {
//    return contacts.filter((contact) =>  {
//     return  contact.name.toLowerCase().includes(filter.toLowerCase());
//   });
//   };
  

// export const Filter = ({ filterName, onChange}) => {
//     return (
//         <FilterStyle>
//           <TextToDo>Find contacts by name</TextToDo>
//             <FilterInputStyle
//             type="text"
//             value={filterName}
//             placeholder="Please, enter a name"
//             onChange={onChange}
//             />
//         </FilterStyle>
//     )
// }
