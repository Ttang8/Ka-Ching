import {connect} from 'react-redux';
import Login from './Login';
import { clearErrors } from '../actions/authActions';
import {loginUser, signupUser , addAlert} from '../actions';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  loginUser: (email, password) => dispatch(loginUser(email, password)),
  signupUser: (email, password) => dispatch(signupUser(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
