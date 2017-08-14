import {connect} from 'react-redux';
import ItemSubmitForm from './ItemSubmitForm';
import {createItem, fetchItems} from '../../actions/itemActions';

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
  createItem: item => dispatch(createItem(item)),
  fetchItems: userPosition => dispatch(fetchItems(userPosition))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemSubmitForm);
