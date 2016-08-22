import { connect } from 'react-redux';
import _ from 'lodash';
import TagList from '../component/TagList';

const TagListContainer = connect(
  state => ({
    tags: _.get(state.definition, 'tags', []),
  }),
  () => ({})
)(TagList);

export default TagListContainer;
