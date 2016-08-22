import { connect } from 'react-redux';
import _ from 'lodash';
import Header from '../component/Header';

const ConnectedHeader = connect(
  state => ({
    title: _.get(state.definition, 'info.title', ''),
    baseUrl: _.get(state.definition, 'basePath', ''),
    apiVersion: _.get(state.definition, 'info.version', ''),
    host: _.get(state.definition, 'host'),
  }),
  () => ({})
)(Header);

export default ConnectedHeader;
