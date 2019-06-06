import { combineReducers } from 'redux'
import PlayReducers from './playReducers'
import ScoreReducers from './scoreReducers'
import LivesReducers from './livesReducers'
import NotificationsReducers from './notificationsReducers'

export default combineReducers({
    play: PlayReducers,
    score: ScoreReducers,
    lives: LivesReducers,
    notifications: NotificationsReducers
});