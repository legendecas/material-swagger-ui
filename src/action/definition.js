import request from 'superagent';

const action = {
  getDefinition: url => dispatch => {
    request.get(url).then(response => dispatch(action.gotDefinition(response.body)));
  },
  gotDefinition: definition => ({
    type: 'GOT_DEFINITION',
    definition,
  }),
};

export default action;
