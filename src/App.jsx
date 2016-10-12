import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Provider } from 'react-redux';
import qs from 'querystring';
import store from './store';
import action from './action/definition';
import ConnectedHeader from './container/ConnectedHeader';
import ApiDescriptionContainer from './container/ApiDescriptionContainer';
import Footer from './component/Footer';
import ConnectedDrawer from './container/ConnectedDrawer';
import TaggedEntrypoints from './container/TaggedEntrypoints';

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
    width: '90%',
  },
  apiContent: {
    marginTop: '10vh',
    display: 'flex',
    flexDirection: 'column',
  },
});

const App = () => (
  <Provider store={store}>
    <app className={css(style.app)}>
      <ConnectedHeader/>
      <ConnectedDrawer/>
      <main className={`container ${css(style.main)}`}>
        <ApiDescriptionContainer/>
        <div className={css(style.apiContent)}>
          <TaggedEntrypoints/>
        </div>
      </main>
      <Footer/>
    </app>
  </Provider>
);

export default App;

const query = qs.parse(window.location.search.slice(1));
const url = query.url || 'http://petstore.swagger.io/v2/swagger.json';
store.dispatch(action.getDefinition(url));
