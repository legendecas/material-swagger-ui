import React, { PropTypes } from 'react';
import marked from 'marked';
import Model from './Model';

const Response = ({ status, response }) => {
  const { description = '', schema, headers, examples } = response;
  return (
    <div>
      <span className="blue-text">Response {status}</span>
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
