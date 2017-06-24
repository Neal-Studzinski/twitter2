import { createStore, applyMiddleware } from 'redux'
import thunk from './middleware/thunk.js'
import logger from './middleware/logger.js'
import headerView from './views/header_view.js'
import loginView from './views/login_view.js'
import tweetView from './views/tweet_view.js'
import User from './models/user_model.js'
import api from './api.js'
import store from './store.js';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// export default function app() {
//   render(
//       <Provider store={store}>
//         <Router>
//             <div>
//                 <Route path="/"      component={AppRoot}/>
//             </div>
//         </Router>
//     </Provider>,
//     document.getElementById('app')
//   )
// }
