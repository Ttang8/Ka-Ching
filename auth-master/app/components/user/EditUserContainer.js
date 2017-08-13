import {connect} from 'react-redux';
import EditUser from './EditUser';
import { clearErrors } from '../../actions/authActions';
import { editUser } from '../../actions/userActions';

const mapStateToProps = ({auth, user}) => ({
  auth,
  user
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  editUser: (user) => dispatch(editUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser);
