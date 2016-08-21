import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import classNames from 'classnames';
import { Provider } from 'react-redux';
import store from './store';
import Header from './component/Header';
import ApiDescriptionField from './container/PinnedApiDescriptionField';
import Footer from './component/Footer';
import PinnedTagList from './container/PinnedTagList';

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
});

const App = () => (
  <Provider store={store}>
    <app className={css(style.app)}>
      <Header/>
      <main className={classNames('container', css(style.main))}>
        <ApiDescriptionField/>
        <div className={classNames('row', css(style.apiContent))}>
          <PinnedTagList/>
        </div>
        <div style={{ height: '1000vh' }}/>
      </main>
      <Footer/>
    </app>
  </Provider>
);

export default App;
