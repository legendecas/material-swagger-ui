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
  entrypointList: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const EntrypointLists = ({ lists }) => (
  <div className={css(style.listWrapper)}>
    {
      lists.map(({ title, entrypoints }) =>
        <div
          key={title}
          id={title}
          name={title}
          className={css(style.tagList)}
          ref={ref => $(document).ready(() => {
            $(ref).scrollSpy();
          })}
        >
          <a className="black-text scroll-spy" href={`#${title}`}><h4>{title}</h4></a>
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
    entrypoints: PropTypes.arrayOf(PropTypes.shape({
      method: PropTypes.string,
      path: PropTypes.string,
      operation: PropTypes.object,
    })),
  })),
};

export default EntrypointLists;
