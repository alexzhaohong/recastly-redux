import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  return (action.type === 'CHANGE_VIDEO_LIST') ? action.videos : state;
};

export default videoListReducer;
