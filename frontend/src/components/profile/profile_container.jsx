import { connect } from "react-redux";
import Profile from "./profile";

const mSTP = state => ({
  errors: state.errors.session,
  auth: state.session.isAuthenticated,
  currentUser: state.session.user
})


const mDTP = dispatch => ({
  
})

export default connect(mSTP, mDTP)(Profile)