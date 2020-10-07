import { createStore, applyMiddleware, compose} from 'redux';

import rootReducer from './root-reducer';

//ex: [logger];
const middlewares = []; 

//const store = createStore(rootReducer, applyMiddleware(...middlewares));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middlewares)
));

export default store;