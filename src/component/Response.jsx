import React from 'react';
import marked from 'marked';
import Model from './Model';

const Response = () => (
  <div>
    <span className="blue-text">Response</span>
    <div
      className="grey-text"
      dangerouslySetInnerHTML={{
        __html: marked('Request Description with GFM Syntax support'),
      }}
    />
    <Model/>
  </div>
);

export default Response;
