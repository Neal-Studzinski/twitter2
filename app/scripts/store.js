import React from 'react';
import { createStore, applyMiddleware } from 'redux'

import logger from './middleware/logger.js'
import thunk  from './middleware/thunk.js'
import reducer from './reducers/app_reducer.js'

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      logger
    )
  )
);

export default store;
