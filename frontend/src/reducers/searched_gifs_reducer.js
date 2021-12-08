import { RECEIVE_GIFS, RECEIVE_GIF } from "../actions/searched_gifs_actions";

const SearchedGifsReducer = (state={}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_GIF:
      return Object.assign({}, state, { [action.gif.id]: action.gif })
    case RECEIVE_GIFS:
      let nState = {}
      action.gifs.forEach((gif) => {
        nState[gif.id] = gif
      })
      return nState
    default:
      return state;
  }
}

export default SearchedGifsReducer;