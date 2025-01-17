import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router'
import App from './App.tsx'
import bootstrap from 'bootstrap';
import {Provider} from 'react-redux';
import {Store,combineReducers,applyMiddleware,createStore} from 'redux';
import loginReducer from './reducers/loginReducer';
import shoppingReducer from './reducers/shoppingReducer';
import {RootReducer,Action,AppState} from './types/states';
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers<RootReducer>({
	login:loginReducer,
	shopping:shoppingReducer
})

const store:Store<AppState,Action> = createStore(rootReducer,applyMiddleware(thunk));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
  </StrictMode>,
)
