import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

let mapStateToProps = (state) => {
  return {
    videos: state.videoList
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
  };
};

var VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);

export default VideoListContainer;
