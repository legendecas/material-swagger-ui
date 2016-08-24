import React, { PropTypes } from 'react';
import marked from 'marked';
import classNames from 'classnames';
import Model from './Model';

const Response = ({ status, response }) => {
  const { description = '', schema, examples } = response;
  return (
    <div>
      <span className="blue-text">Response </span>
      <span
        className={classNames({
          'blue-text': status === 'default',
          'teal-text': Number(status) < 400,
          'deep-orange-text': Number(status) >= 400,
        })}
      >{status}</span>
      <div
        className="grey-text"
        dangerouslySetInnerHTML={{
          __html: marked(description),
        }}
      />
      { schema || examples ? <Model schema={schema} examples={examples}/> : null}
    </div>
  );
};

Response.propTypes = {
  status: PropTypes.string.isRequired,
  response: PropTypes.shape({
    description: PropTypes.string.isRequired,
    schema: PropTypes.object,
    headers: PropTypes.objectOf(PropTypes.shape({
      description: PropTypes.string,
      type: PropTypes.string,
    })),
    examples: PropTypes.object,
  }).isRequired,
};

export default Response;
