import React, { Component } from 'react';
import AlbumImage from './AlbumImage';
import AlbumList from './AlbumList';
import CurrentSong from './CurrentSong';
import './App.css';
import { songs } from './songs';

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentSong: '',
      currentAlbum: ''
    }
  }


  onselectSong = (e) => {
    this.setState({currentSong: ''});
    this.setState({currentAlbum: ''});

    this.setState({currentSong: e.target.id});
    console.log('currentSong: ', this.state.currentSong);
    this.setState({currentAlbum: e.target.className});
    console.log('currentAlbum: ', this.state.currentAlbum);
    console.log('clicked')
  }



  render(){
    return (
      <div className="App">
        <div>
          <AlbumImage selectedAlbum = {this.state.currentAlbum}/>
        </div>
        <div className="container">
          <AlbumList songs = {songs}  selectSong = {this.onselectSong}/>
        </div>
        <div>
        <CurrentSong selectedSong = {this.state.currentSong}/>
        </div>
      </div>
    );
  }
}

export default App;
