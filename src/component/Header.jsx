import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create({
  header: {
    background: '#1E88E5',
    height: '96px',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    paddingBottom: '6px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  apiInfo: {
    alignSelf: 'flex-end',
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

const Header = () => (
  <header className={css(style.header)}>
    <div className={`container ${css(style.container)}`}>
      <h3 className="white-text ">
        Swagger UI
      </h3>
      <div className={css(style.apiInfo)}>
        <span className="white-text">
          Base Url: /api
        </span>
        <span className="white-text" style={{ marginLeft: '8px' }}>
          API Version: v2
        </span>
      </div>
    </div>
  </header>
);

export default Header;
