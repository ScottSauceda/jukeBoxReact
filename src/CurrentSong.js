import React from 'react';

import DFTR from './songs/Dont Fear The Reaper.mp3'
import BS from './songs/Brain Stew.mp3';
import Candy from './songs/Candy.mp3';
import Comedown from './songs/Comedown.mp3';
import FB from './songs/Free Bird.mp3';
import MTAF from './songs/More Than A Feeling.mp3'
import OH from './songs/One Headlight.mp3';
import WICA from './songs/When I Come Around.mp3';


const CurrentSong = ( {selectedSong} ) => {
    switch(selectedSong) {
        case 'Dont Fear The Reaper':
            return <audio src={DFTR} controls='controls' autoplay='true'/>;
        case 'Brain Stew':
            return <audio src={BS} controls='controls' autoplay='true'/>;
        case 'Candy':
            return <audio src={Candy} controls='controls' autoplay='true'/>;
        case 'Comedown':
            return <audio src={Comedown} controls='controls' autoplay='true'/>;
        case 'Free Bird':
            return <audio src={FB} controls='controls' autoplay='true'/>;
        case 'More Than A Feeling':
            return <audio src={MTAF} controls='controls' autoplay='true'/>;
        case 'One Headlight':
            return <audio src={OH} controls='controls' autoplay='true'/>;
        case 'When I Come Around':
            return <audio src={WICA} controls='controls' autoplay='true'/>;
        default:
          return <h1>Select a song</h1>;
      }
}

export default CurrentSong;