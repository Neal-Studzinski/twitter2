import { createStore, applyMiddleware } from 'redux'
import thunk from './middleware/thunk.js'
import logger from './middleware/logger.js'
import loginView from './views/login_view.js'
import exampleView from './views/example_view.js'
import tweetView from './views/tweet_view.js'
import User from './models/user_model.js'

export default function app() {

    let testUser = new User({
        username: 'Neal',
        displayName: 'NAS',
        bio: "Development student"
    });

    const initialState = {
        session: {
            user: testUser,
            authToken: ""
        },
        view: loginView
    };

    const reducer = function (currentState, action) {
        if (currentState === undefined) {
          return initialState;
        }

        switch (action.type) {
            case "START":
                return currentState;
            case "TWEET_VIEW":
                return currentState;

            default:
                console.debug(`Unhandled Action: ${action.type}!`);
                return currentState;
        };
    };

    const store = createStore(
        reducer,
        applyMiddleware(
            thunk,
            logger
        )
    );

    const render = function () {
      let state = store.getState();
      $('#app').html(state.view(store));
    }

    store.subscribe(render);
    store.dispatch({ type: "START" })

}
