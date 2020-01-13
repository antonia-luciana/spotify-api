import CreatePlaylist from "../components/playlists/CreatePlaylist";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { getUserId, createPlaylist } from "../actions";
import { formValueSelector } from 'redux-form';

const mapStateToProps = (state, ownProps) => {
  return { 
    user_id: state.playlists.user_id,
    playlist: state.playlists.id
   };
};

const mapDispatchToProps = dispatch => {
  return {

    //mapDispatchToProps for redux thunk
    getUserId: access_token => {
      getUserId(dispatch, access_token);
    },
    createPlaylist: values => {
      console.log("mapstatetoprops!", values)
      createPlaylist(dispatch, values)
    }
  };
};

const validate = formValues => {
  console.log("formValues in validate", formValues);
}

export default (connect( mapStateToProps, mapDispatchToProps)(CreatePlaylist));
