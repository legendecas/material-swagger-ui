import React from 'react';
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

const TagList = () => (
  <div className={`col m3 l2 ${css(style.wrapper)}`}>
    <taglist
      ref={list => {
        $(window).load(() => {
          console.log($(list).offset().top);
          $(list).pushpin({ top: $(list).offset().top });
        });
      }}
      className={css(style.taglist)}
    >
      <ul>
        <li><a name="tag-a" href="#tag-a" className="active">Tag A</a></li>
        <li><a name="tag-b" href="#tag-b">Tag B</a></li>
        <li><a name="tag-c" href="#tag-c">Tag C</a></li>
        <li><a name="tag-d" href="#tag-d">Tag D</a></li>
      </ul>
    </taglist>
  </div>
);

export default TagList;
