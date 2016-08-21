import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import classNames from 'classnames';
import Header from './component/Header';
import ApiDescriptionField from './component/ApiDescriptionField';
import Footer from './component/Footer';

const style = StyleSheet.create({
  app: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  main: {
    marginTop: '5vh',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
  },
});

const App = () => (
  <app className={css(style.app)}>
    <Header/>
    <main className={classNames('container', css(style.main))}>
      <ApiDescriptionField/>
    </main>
    <Footer/>
  </app>
);

export default App;
