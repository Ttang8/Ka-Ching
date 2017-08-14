import {connect} from 'react-redux';
import UserProfile from './userProfile';
import {unauthUser} from '../../actions';

const mapDisatchToProps = dispatch => ({
  unauthUser: () => dispatch(unauthUser())
});

export default connect(
  null,
  mapDisatchToProps
)(UserProfile);
