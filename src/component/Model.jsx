import React from 'react';
import './Model.css';

const Model = () => (
  <div className="model-container">
    <div className="model-button-container">
      <a>Model Schema</a>
      <div className="model-button-separator"/>
      <a>Example</a>
    </div>
    <pre className="model-code-block">
      <code>
        {
          `{\n  "key": "value"\n}`
        }
      </code>
    </pre>
  </div>
);

export default Model;
