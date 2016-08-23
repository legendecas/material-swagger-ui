import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import _ from 'lodash';
import './Drawer.css';

const style = StyleSheet.create({
  taglist: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Drawer = ({ tags }) => (
  <ul
    ref={ref => {
      const offset = $(ref).offset() || {};
      const top = offset.top;
      $(ref).pushpin({ top });
    }}
    id="slide-out"
    className={`side-nav fixed collapsible collapsible-accordion ${css(style.taglist)}`}
  >
    {tags.map(tag =>
      <li key={tag.name}>
        <a className="collapsible-header waves-effect waves-teal" href={`#${tag.name}`}>
          {tag.name}
        </a>
        <div className="collapsible-body">
          <ul>
            {tag.entrypoints.map(entrypoint =>
              <li key={entrypoint.method + entrypoint.path}>
                <a
                  href={`#${_.kebabCase(entrypoint.method + entrypoint.path)}`}
                  className="waves-effect waves-teal"
                >
                  {entrypoint.method.toUpperCase()} {entrypoint.path}
                </a>
              </li>
            )}
          </ul>
        </div>
      </li>
    )}
  </ul>
);

Drawer.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    entrypoints: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string,
      method: PropTypes.string,
    })),
  })),
};

export default Drawer;
