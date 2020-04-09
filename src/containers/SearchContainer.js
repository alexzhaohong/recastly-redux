import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

//TODO refactor search.js component to be stateless, and include a current searchbar contents in store state

let mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (query) => {
      dispatch(handleVideoSearch(query));
    }
  };
};

var SearchContainer = connect(null, mapDispatchToProps)(Search);


export default SearchContainer;
