const initialState = {};

export default function pinningTags(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case 'PIN_LIST':
      newState = { ...state, list: action.list };
      break;
    case 'PIN_POSITION':
      newState = { ...state, position: action.position };
      break;
    default:
      break;
  }
  const { list, position } = newState;
  if (list && position) {
    $(list).pushpin({ top: position });
  }
  return newState;
}
