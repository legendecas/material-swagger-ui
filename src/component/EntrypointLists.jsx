import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import EntrypointCard from './EntrypointCard';

const style = StyleSheet.create({
  listWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  tagList: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  listTitle: {
    display: 'inline',
    marginRight: '20px',
  },
  listSubtitle: {
    fontSize: '20px',
  },
  entrypointList: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const EntrypointLists = ({ lists }) => (
  <div className={css(style.listWrapper)}>
    {
      lists.map(({ title, description, entrypoints }) =>
        <div
          key={title}
          id={title}
          name={title}
          className={`section scrollspy ${css(style.tagList)}`}
          ref={ref => $(document).ready(() => {
            $(ref).scrollSpy({ scrollOffset: 0 });
          })}
        >
          <a className="black-text" href={`#${title}`}>
            <h2 className={css(style.listTitle)}>{title}</h2>
            <span className={`grey-text ${css(style.listSubtitle)}`}>{description}</span>
          </a>
          <div className={css(style.entrypointList)}>
            {entrypoints.map(entrypoint =>
              <EntrypointCard
                key={entrypoint.method + entrypoint.path}
                method={entrypoint.method}
                path={entrypoint.path}
                operation={entrypoint.operation}
              />)}
          </div>
        </div>
      )
    }
  </div>
);

EntrypointLists.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    entrypoints: PropTypes.arrayOf(PropTypes.shape({
      method: PropTypes.string,
      path: PropTypes.string,
      operation: PropTypes.object,
    })),
  })),
};

export default EntrypointLists;
