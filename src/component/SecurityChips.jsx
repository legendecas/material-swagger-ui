import React, { PropTypes } from 'react';
import _ from 'lodash';

const SecurityChips = ({ security }) => (
  <div className="entrypoint-securities">
    {_.flatMap(security, securities =>
      _.flatMap(securities, (scopes, name) =>
        _.map(scopes, scope =>
          <div key={name + scope} className="chip">
            {name}:{scope}
          </div>
        )))}
  </div>
);

SecurityChips.propTypes = {
  security: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SecurityChips;
