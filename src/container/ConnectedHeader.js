import { connect } from 'react-redux';
import _ from 'lodash';
import Header from '../component/Header';

const ConnectedHeader = connect(
  state => ({
    title: _.get(state.definition.store, 'info.title', ''),
    baseUrl: _.get(state.definition.store, 'basePath', ''),
    apiVersion: _.get(state.definition.store, 'info.version', ''),
    host: _.get(state.definition.store, 'host'),
  }),
  () => ({})
)(Header);

export default ConnectedHeader;
