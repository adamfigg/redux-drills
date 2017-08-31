import { createStore } from 'redux';
import guestlist_reducer from './ducks/guestlist';
export default createStore(guestlist_reducer);