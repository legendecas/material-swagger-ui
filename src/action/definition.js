import request from 'superagent';
import yaml from 'js-yaml';

const action = {
  getDefinition: url => dispatch => {
    request.get(url).then(response => {
      if (url.endsWith('yaml') || url.endsWith('yml')) {
        dispatch(action.gotDefinition(yaml.safeLoad(response.text)));
      } else {
        dispatch(action.gotDefinition(response.body));
      }
    });
  },
  gotDefinition: definition => ({
    type: 'GOT_DEFINITION',
    definition,
  }),
};

export default action;
