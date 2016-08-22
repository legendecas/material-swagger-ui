import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import './TagList.css';

const style = StyleSheet.create({
  taglist: {
    paddingTop: '3vh',
    paddingBottom: '7vh',
    paddingRight: '1vh',
    borderRight: '8px solid #1E88E5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    '@media only screen and (max-width: 601px)': {
      display: 'none',
    },
    '@media only screen and (min-width: 993px)': {
      width: 'calc(70vw / 6)',
    },
    '@media only screen and (min-width: 601px) and (max-width: 993px)': {
      width: 'calc(75vw / 6)',
    },
  },
});

const TagList = ({ tags }) => (
  <div className={`col m3 l2 ${css(style.wrapper)}`}>
    <taglist
      ref={list => {
        const offset = $(list).offset() || {};
        const top = offset.top;
        $(list).pushpin({ top });
      }}
      className={css(style.taglist)}
    >
      <ul>
        {tags.map(tag => <li key={tag}><a href={`#${tag}`}>{tag}</a></li>)}
      </ul>
    </taglist>
  </div>
);

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default TagList;
