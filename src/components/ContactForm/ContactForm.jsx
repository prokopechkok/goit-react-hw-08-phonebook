import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    if (e.target.name === 'name') return setName(e.target.value);
    if (e.target.name === 'number') return setNumber(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const currentName = e.currentTarget.elements.name.value;
    const currentNumber = e.currentTarget.elements.number.value;

    setName(currentName);
    setNumber(currentNumber);

    const hasDuplicates = contacts.some(
      contact =>
        contact.name.toLowerCase() === currentName.toLowerCase() ||
        contact.number === currentNumber
    );

    if (hasDuplicates) {
      alert(`Contact ${currentName} is already in contacts.`);
      return;
    }
    const formData = { name, number };
    dispatch(
      addContact({
        ...formData,
      })
    );

    setName('');
    setNumber('');
  };

  return (
    <form className={css.contactForm} onSubmit={handleFormSubmit}>
      <label className={css.formInputLabel}>
        Name
        <input
          onChange={handleChange}
          className={css.contactInput}
          type="text"
          name="name"
          placeholder="Enter name here"
          value={name}
          required
          autoComplete="true"
        />
      </label>
      <label className={css.formInputLabel}>
        Number
        <input
          onChange={handleChange}
          className={css.contactInput}
          type="tel"
          name="number"
          placeholder="Enter phonenumber here"
          value={number}
          required
          autoComplete="true"
        />
      </label>
      <button className={css.addContactBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
