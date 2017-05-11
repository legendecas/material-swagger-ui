import React, { PropTypes } from 'react';
import marked from 'marked';
import _ from 'lodash';
import Model from './Model';

const Request = ({ parameters = [] }) => {
  const body = _.first(parameters.filter(param => param.in === 'body'));
  const params = parameters.filter(param => param.in !== 'body');

  return (
    <div>
      <span className="blue-text">Request</span>
      {
        params.length > 0 ? <table className="highlight centered responsive-table">
          <thead>
            <tr>
              <th data-field="name">Parameter Name</th>
              <th data-field="description">Description</th>
              <th data-field="parameter-type">Parameter Type</th>
              <th data-field="data-type">Data Type</th>
            </tr>
          </thead>
          <tbody>
            {params.map(param =>
              <tr key={params.name + param.description}>
                <td>{param.name}</td>
                <td
                  dangerouslySetInnerHTML={{
                    __html: marked(param.description || ''),
                  }}
                />
                <td>{param.in}</td>
                <td style={{ fontWeight: param.required ? 'bold' : 'normal' }}>
                  {param.type}{param.required ? '(required)' : null}
                  {
                    param.enum ?
                      (<div className="input-field">
                        <select
                          defaultValue=""
                          ref={ref => $(document).ready(() => $(ref).material_select())}
                        >
                          <option value="" disabled>Enum type</option>
                          {param.enum.map(type => <option key={type} value={type}>{type}</option>)}
                        </select>
                      </div>)
                      : null
                  }
                </td>
              </tr>
            )}
          </tbody>
        </table> : null
      }
      { body ? <Model schema={body.schema}/> : null}
    </div>
  );
};

Request.propTypes = {
  parameters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    in: PropTypes.string.isRequired,
    description: PropTypes.string,
    required: PropTypes.bool,
  })).isRequired,
};

export default Request;
