import {connect} from 'react-redux';
import ItemSubmitForm from './ItemSubmitForm';
import {createItem} from '../../actions/itemActions';

const mapDispatchToProps = dispatch => ({
  createItem: item => dispatch(createItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(ItemSubmitForm);
