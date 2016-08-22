import React, { Component, PropTypes } from 'react';
import marked from 'marked';
import classNames from 'classnames';
import _ from 'lodash';
import Request from './Request';
import Response from './Response';
import SecurityChips from './SecurityChips';
import './EntrypointCard.css';

export default class EntrypointCard extends Component {
  static propTypes = {
    method: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    operation: PropTypes.object.isRequired,
  };

  state = {
    revealed: false,
  };

  render() {
    const { method, path, operation } = this.props;
    const { description = '', summary, parameters = [], responses = {}, security = [] } = operation;
    const { revealed } = this.state;
    const href = method.toUpperCase() + path;

    return (
      <entrypoint>
        <div className="card">
          <div
            className={`entrypoint-method entrypoint-${method} ${classNames({
              'entrypoint-deprecated': operation.deprecated,
            })}`}
          >
            <a name={href} href={`#${href}`}>
              <span className="entrypoint-method-name white-text">{method.toUpperCase()}</span>
              <span className="entrypoint-method-path white-text">{path}</span>
            </a>
            {
              operation.deprecated ?
                <span style={{ marginRight: '20px' }} className="white-text">Deprecated</span> :
                null
            }
          </div>
          <div className="card-content">
            <p>{summary}</p>
            <div
              className="grey-text"
              dangerouslySetInnerHTML={{
                __html: marked(description),
              }}
            />
            <div className="entrypoint-info">
              <SecurityChips security={security}/>
              <a
                className="waves-effect waves-teal btn-flat entrypoint-details-btn"
                onClick={() => this.setState(state => ({ ...state, revealed: !state.revealed }))}
              >{ revealed ? 'Less Details' : 'Details'}</a>
            </div>
          </div>
          <div
            className={`card-action ${classNames({
              hide: !revealed,
            })}`}
          >
            {parameters.length > 0 ? <Request parameters={parameters}/> : null}
            {_.map(responses, (value, key) => <Response key={key} status={key} response={value}/>)}
          </div>
        </div>
      </entrypoint>
    );
  }
}
