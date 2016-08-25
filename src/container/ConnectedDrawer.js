import { connect } from 'react-redux';
import _ from 'lodash';
import Drawer from '../component/Drawer';

const ConnectedDrawer = connect(
  state => ({
    tags: _.map(state.definition.tags,
      tag => ({
        name: tag.name,
        description: tag.description,
        entrypoints: _.filter(state.definition.entrypoints,
          entrypoint => _.includes(entrypoint.operation.tags, tag.name))
          .map(entrypoint => ({
            method: entrypoint.method,
            path: entrypoint.path,
          })),
      })),
  }),
  () => ({})
)(Drawer);

export default ConnectedDrawer;
