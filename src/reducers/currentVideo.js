import Redux from 'redux';
import exampleVideoData from './../data/exampleVideoData.js';

var currentVideoReducer = (state = exampleVideoData[0], action) => {
  return (action.type === 'CHANGE_VIDEO') ? action.video : state;

};

export default currentVideoReducer;