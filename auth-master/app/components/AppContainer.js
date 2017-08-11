import {connect} from 'react-redux';
import App from './App';

const mapStateToProps = (state) => {
  return{
    user_id: state.auth.user_id
  };
};

export default connect(
  mapStateToProps
)(App);
