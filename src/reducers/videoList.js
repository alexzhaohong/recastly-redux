import Redux from 'redux';
import exampleVideoData from './../data/exampleVideoData.js';

var videoListReducer = (state = exampleVideoData, action) => {
  return (action.type === 'CHANGE_VIDEO_LIST') ? action.videos : state;
};

export default videoListReducer;
