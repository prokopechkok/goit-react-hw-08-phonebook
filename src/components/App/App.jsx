import { ContactsPage, LoginPage, RegisterPage } from 'components';
import Layout from 'components/Layout/Layout';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { ContactForm, ContactList, Filter } from 'components';
// import { fetchContacts } from '../../redux/operations';
// import { useDispatch } from 'react-redux';
// import css from './App.module.css';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Layout />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Layout />} />
        </Route>
      </Routes>
    </>
  );
};
