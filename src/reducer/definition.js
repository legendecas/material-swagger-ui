import _ from 'lodash';

const initialState = {};

export default function definition(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case 'GOT_DEFINITION':
      newState = action.definition;
      newState.tags = _.uniq([
        ..._.get(newState, 'tags', []),
        ..._.flatMap(_.get(newState, 'paths', {}),
          pathObject => _.flatMap(pathObject, methodObject => methodObject.tags)),
      ]);
      break;
    default:
      break;
  }

  return newState;
}
