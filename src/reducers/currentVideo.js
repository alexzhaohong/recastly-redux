import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  return (action.type === 'CHANGE_VIDEO') ? action.video : state;

};

export default currentVideoReducer;