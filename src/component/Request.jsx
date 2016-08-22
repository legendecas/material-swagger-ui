import React from 'react';
import marked from 'marked';
import Model from './Model';

const Request = () => (
  <div>
    <span className="blue-text">Request</span>
    <div
      className="grey-text"
      dangerouslySetInnerHTML={{
        __html: marked('Request Description with GFM Syntax support'),
      }}
    />
    <table className="highlight centered responsive-table">
      <thead>
        <tr>
          <th data-field="name">Parameter Name</th>
          <th data-field="description">Description</th>
          <th data-field="parameter-type">Parameter Type</th>
          <th data-field="data-type">Data Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>id</td>
          <td>Object Id</td>
          <td>path</td>
          <td>string</td>
        </tr>
      </tbody>
    </table>
    <Model/>
  </div>
);

export default Request;
