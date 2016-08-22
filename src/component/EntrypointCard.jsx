import React, { PropTypes } from 'react';
import marked from 'marked';
import classNames from 'classnames';
import Request from './Request';
import Response from './Response';
import './EntrypointCard.css';

const EntrypointCard = ({ method = 'get', revealed = false }) => (
  <entrypoint>
    <div className="card">
      <div className={`entrypoint-method entrypoint-${method} white-text`}>
        <span className="entrypoint-method-name">{method.toUpperCase()}</span>
        <span className="entrypoint-method-path">/entrypoint/path</span>
      </div>
      <div className="card-content">
        <p>Request Object Summary</p>
        <div
          className="grey-text"
          dangerouslySetInnerHTML={{
            __html: marked('Request Object Long long Description with GFM Syntax support'),
          }}
        />
        <div className="entrypoint-info">
          <div className="entrypoint-securities">
            <div className="chip">
              read:example
            </div>
            <div className="chip">
              write:example
            </div>
          </div>
          <a className="waves-effect waves-teal btn-flat entrypoint-details-btn">Details</a>
        </div>
      </div>
      <div
        className={`card-action ${classNames({
          hide: !revealed,
        })}`}
      >
        <Request/>
        <Response/>
      </div>
    </div>
  </entrypoint>
);

EntrypointCard.propTypes = {
  method: PropTypes.string,
  revealed: PropTypes.bool,
};

export default EntrypointCard;
