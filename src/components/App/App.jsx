import React, { useEffect } from 'react';
import { ContactForm, ContactList, Filter } from 'components';
import { fetchContacts } from '../../redux/operations';
import { useDispatch } from 'react-redux';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
