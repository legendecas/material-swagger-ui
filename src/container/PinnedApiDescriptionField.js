import { connect } from 'react-redux';
import action from '../action/pinningTags';
import ApiDescriptionField from '../component/ApiDescriptionField';

const PinnedApiDescriptionField = connect(
  () => ({}),
  dispatch => ({
    pinPosition: position => dispatch(action.pinPosition(position)),
  })
)(ApiDescriptionField);

export default PinnedApiDescriptionField;
