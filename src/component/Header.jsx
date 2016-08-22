import React, { PropTypes } from 'react';
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

const Header = ({ title, baseUrl, apiVersion }) => (
  <header className={css(style.header)}>
    <div className={`container ${css(style.container)}`}>
      <h3 className="white-text ">
        {title}
      </h3>
      <div className={css(style.apiInfo)}>
        {
          baseUrl ? <span className="white-text">Base Url: {baseUrl}</span> : null
        }
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
};

export default Header;
