import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Provider } from 'react-redux';
import store from './store';
import Header from './component/Header';
import ApiDescriptionField from './component/ApiDescriptionField';
import Footer from './component/Footer';
import TagList from './component/TagList';
import EntrypointCard from './component/EntrypointCard';

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
  apiContent: {
    marginTop: '10vh',
  },
  entrypointList: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const App = () => (
  <Provider store={store}>
    <app className={css(style.app)}>
      <Header/>
      <main className={`container ${css(style.main)}`}>
        <ApiDescriptionField/>
        <div className={`row ${css(style.apiContent)}`}>
          <TagList/>
          <div className={`col s12 m9 l9 offset-l1 ${css(style.entrypointList)}`}>
            <EntrypointCard revealed/>
            <EntrypointCard method={'post'}/>
          </div>
        </div>
        <div style={{ height: '1000vh' }}/>
      </main>
      <Footer/>
    </app>
  </Provider>
);

export default App;
