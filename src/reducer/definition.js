import _ from 'lodash';

const initialState = {};

export default function definition(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case 'GOT_DEFINITION':
      newState = action.definition;
      newState.tags = _.uniqBy([
        ..._.get(newState, 'tags', []),
        ..._.flatMap(_.get(newState, 'paths', {}),
          pathObject => _.flatMap(pathObject, methodObject => _.map(methodObject.tags, tag => ({
            name: tag,
            description: '',
          })))),
      ], 'name');
      newState.entrypoints = _.flatMap(_.get(newState, 'paths', {}), (pathObject, path) =>
        _.map(pathObject, (methodObject, method) => ({
          path, method, operation: methodObject,
        })));
      break;
    default:
      break;
  }

  return newState;
}
