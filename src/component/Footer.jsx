import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20vh',
    backgroundColor: '#FFFFFF00',
  },
});

const Footer = () => (
  <footer className={css(style.footer)}>
    <span>Powered with ❤️ by
      <a
        href="https://github.com/legendecas/material-swagger-ui"
        rel="noopener noreferrer"
        target="_blank"
        className="blue-grey-text text-darken-4"
      > material-swagger-ui</a>.
    </span>
  </footer>
);

export default Footer;
