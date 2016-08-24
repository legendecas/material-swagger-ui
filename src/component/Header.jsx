import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create({
  header: {
    background: '#1E88E5',
    minHeight: '114px',
    display: 'flex',
    alignItems: 'center',
  },
  headerTitle: {
    '@media only screen and (max-width: 992px)': {
      fontSize: '36px',
    },
    '@media only screen and (min-width: 993px)': {
      fontSize: '48px',
    },
  },
  container: {
    paddingBottom: '6px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  apiInfo: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    '@media only screen and (max-width: 601px)': {
      alignItems: 'flex-start',
    },
  },
});

const Header = ({ title, baseUrl, apiVersion, host }) => (
  <header className={css(style.header)}>
    <div className={`container ${css(style.container)}`}>
      <h1 className={`flow-text white-text ${css(style.headerTitle)}`}>
        {title}
      </h1>
      <div className={css(style.apiInfo)}>
        {host ? <span className="white-text">Host: {host}</span> : null}
        {baseUrl ? <span className="white-text">Base Url: {baseUrl}</span> : null}
        {
          apiVersion
            ? <span className="white-text">API Version: {apiVersion}</span>
            : null
        }
      </div>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  baseUrl: PropTypes.string,
  apiVersion: PropTypes.string,
  host: PropTypes.string,
};

export default Header;
