import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import App from './components/app';
// import reducers from './reducers';
// const createStoreWithMiddleware = applyMiddleware()(createStore);

const API_KEY = 'AIzaSyB2zwSfQkssqOkKvyzGJvYUPHBrHOgX5rY';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key:API_KEY, term: 'surfboards'}, (videos) => {
      console.log(videos);
      this.setState(
        {
          videos: videos,
          selectedVideo: videos[0]
        }
      )
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
