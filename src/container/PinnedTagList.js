import { connect } from 'react-redux';
import TagList from '../component/TagList';
import action from '../action/pinningTags';

const PinnedTagList = connect(
  () => ({}),
  dispatch => ({
    pinList: (list) => dispatch(action.pinList(list)),
  })
)(TagList);

export default PinnedTagList;
