import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create({
  header: {
    background: '#1E88E5',
    minHeight: '96px',
    display: 'flex',
    alignItems: 'center',
  },
  headerTitle: {
    '@media only screen and (max-width: 601px)': {
      fontSize: '1.72rem',
    },
    '@media only screen and (min-width: 993px)': {
      fontSize: '2.92rem',
    },
    '@media only screen and (min-width: 601px) and (max-width: 993px)': {
      fontSize: '2.4rem',
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
    alignSelf: 'flex-end',
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
      <h3 className={`white-text ${css(style.headerTitle)}`}>
        {title}
      </h3>
      <div className={css(style.apiInfo)}>
        {host ? <span className="white-text">Host: {host}</span> : null}
        {baseUrl ? <span className="white-text">Base Url: {baseUrl}</span> : null}
        {
          apiVersion ?
            <span className="white-text" style={{ marginLeft: '8px' }}>
              API Version: {apiVersion}
            </span>
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
