import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import App from './components/app';
// import reducers from './reducers';
// const createStoreWithMiddleware = applyMiddleware()(createStore);

const API_KEY = 'AIzaSyB2zwSfQkssqOkKvyzGJvYUPHBrHOgX5rY';

YTSearch({key: API_KEY, term: 'surfboards'}, function (data) {
  console.log(data);
})

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { video: [] };

    YTSearch({key:API_KEY, term: 'surfboards'}, (video) => {
      this.setState({ videos: videos })
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
  
}

ReactDOM.render(<App />, document.querySelector('.container'));
