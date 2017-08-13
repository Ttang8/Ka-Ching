import {connect} from 'react-redux';
import EditUserSetting from './EditUserSetting';
import { clearErrors } from '../../actions/authActions';
import { editUser } from '../../actions/userActions';

const mapStateToProps = ({auth}) => ({
  auth
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  editUser: (user) => dispatch(editUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserSetting);
