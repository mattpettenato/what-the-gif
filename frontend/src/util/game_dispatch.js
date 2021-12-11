import { 
  PLAY_CATEGORY, 
  RECEIVE_ALL_CATEGORIES, 
  removeCategory, 
  receiveAllCategories
} from '../actions/deck_category_actions'
import { receiveGame } from '../actions/game_actions'
import { 
  RECEIVE_ALL_CARDS,
  receiveCards
 } from '../actions/cards/game_deck_actions'
import { receivePlayedCategory } from '../actions/played_category_actions'
import { 
  nextRound, 
  NEXT_ROUND, 
  startGame, 
  updateCategory, 
  UPDATE_CATEGORY 
} from '../actions/ui_actions'
import { receiveUsers } from '../actions/user_actions'
export const GAME_STARTED = 'GAME_STARTED'
export const GAME_OVER = 'GAME_OVER'
export const RESET_GAME = 'RESET_GAME'
export const JOINED_GAME = 'JOINED_GAME'


const GameDispatch = (action, dispatch) => {
  switch(action.type) {
    case RECEIVE_ALL_CATEGORIES:
      dispatch(receiveAllCategories(action.categories))
      break;
    case RECEIVE_ALL_CARDS:
      dispatch(receiveCards(action.cards))
      break;
    case GAME_STARTED:
      dispatch(startGame())
      break;
    case JOINED_GAME:
      dispatch(receiveUsers(action.users))
      dispatch(receiveGame(action.game))
      break;
    case NEXT_ROUND:
      dispatch(nextRound(action.roundNum))
      break;
    case UPDATE_CATEGORY:
      dispatch(updateCategory())
      break;
    case PLAY_CATEGORY:
      // debugger
      dispatch(receivePlayedCategory(action.category))
      dispatch(removeCategory(action.category))
      break;
    default:
      break;
  }
}

export default GameDispatch;