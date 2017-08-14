import {connect } from 'react-redux';
import Interest from './interest';
import {editUser, fetchUser} from '../../actions/userActions';
import {fetchInterests} from '../../actions/interestActions';

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
  interests: state.interests
});

const mapDispatchToProps = dispatch => ({
  editUser: user => dispatch(editUser(user)),
  fetchInterests: buyItems => dispatch(fetchInterests(buyItems)),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Interest);
