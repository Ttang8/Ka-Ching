import {connect } from 'react-redux';
import Interest from './interest';
import {editUser} from '../../actions/userActions';
import {fetchInterests} from '../../actions/interestActions';

const mapStateToProps = state => ({
  user: state.user,
  interests: state.interests
});

const mapDispatchToProps = dispatch => ({
  editUser: user => dispatch(editUser(user)),
  fetchInterests: buyItems => dispatch(fetchInterests(buyItems))
})

export default connect(mapStateToProps, mapDispatchToProps)(Interest);