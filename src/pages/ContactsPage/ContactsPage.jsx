import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm, ContactList, Filter, Loader } from 'components';
import { fetchContacts } from '../../redux/operations';
import { selectIsLoading } from '../../redux/selectors';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      {/* <h1 className={css.title}>Phonebook</h1> */}
      <ContactForm />
      {/* <h2 className={css.subtitle}>Contacts</h2> */}
      <Filter />
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
