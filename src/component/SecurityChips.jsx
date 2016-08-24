import React, { PropTypes } from 'react';
import _ from 'lodash';

const SecurityChips = ({ security }) => {
  const object = {};
  const list = _.flatMap(security, securities =>
    _.flatMap(securities, (scopes, name) =>
      _.map(scopes, scope => ({ scope, name }))));
  list.forEach(({ scope, name }) => {
    if (object[scope]) {
      object[scope] = object[scope].concat(name);
    } else {
      object[scope] = [name];
    }
  });

  return (
    <div className="entrypoint-securities">
      {Object.getOwnPropertyNames(object).map(scope => {
        const names = object[scope];
        return (
          <div
            key={scope}
            className="chip tooltipped"
            data-position="bottom"
            data-delay="50"
            data-tooltip={names.join(', ')}
            ref={ref => $(document).ready(() => {
              $(ref).tooltip({ delay: 50 });
            })}
          >{scope}</div>
        );
      })}
    </div>
  );
};

SecurityChips.propTypes = {
  security: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))).isRequired,
};

export default SecurityChips;
