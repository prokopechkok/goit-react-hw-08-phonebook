import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { Contact } from 'components';

import css from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ name, number, id }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
