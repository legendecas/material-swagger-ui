import { connect } from 'react-redux';
import _ from 'lodash';
import ApiDescriptionField from '../component/ApiDescriptionField';

const ApiDescriptionContainer = connect(
  state => ({
    description: _.get(state.definition, 'info.description', ''),
  }),
  () => ({})
)(ApiDescriptionField);

export default ApiDescriptionContainer;
