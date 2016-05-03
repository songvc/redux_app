import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import App from './components/app';
// import reducers from './reducers';

const API_KEY = 'AIzaSyB2zwSfQkssqOkKvyzGJvYUPHBrHOgX5rY';
// const createStoreWithMiddleware = applyMiddleware()(createStore);

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'));
