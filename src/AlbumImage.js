import React from 'react';

import AOF from './images/AgentsOfFortune.jpg'
import Boston from './images/Boston.jpg'
import BDTH from './images/BringingDownTheHorse.jpg'
import Dookie from './images/Dookie.jpg'
import Insomniac from './images/Insomniac.jpg'
import LSATGH from './images/LynyrdSkynyrdAllTimeGreatestHits.jpg'
import MP from './images/MarcyPlayground.jpg'
import SS from './images/SixteenStone.jpg'


const AlbumImage = ( {selectedAlbum} ) => {

        switch(selectedAlbum) {
          case 'AgentsOfFortune':
            return <img src={AOF} alt={selectedAlbum} />;
          case 'Boston':
            return <img src={Boston} alt={selectedAlbum} />;
          case 'BringingDownTheHorse':
            return <img src={BDTH} alt={selectedAlbum} />;
          case 'Dookie':
            return <img src={Dookie} alt={selectedAlbum} />;
          case 'Insomniac':
            return <img src={Insomniac} alt={selectedAlbum} />;
          case 'LynyrdSkynyrdAllTimeGreatestHits':
            return <img src={LSATGH} alt={selectedAlbum} />;
          case 'MarcyPlayground':
            return <img src={MP} alt={selectedAlbum} />;
          case 'SixteenStone':
            return <img src={SS} alt={selectedAlbum} />;
          default:
            return <img src={AOF} alt={selectedAlbum} />;
        }

}
export default AlbumImage;