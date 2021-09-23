import React from 'react';
import Album from './Album';

const AlbumList = ({ songs, selectSong }) => {
    const albumArray = songs.map((song, i) => {
        return <Album key={i} id={songs[i].id} title={songs[i].title} album={songs[i].artist} artist={songs[i].album} selectSong= {selectSong}/>
    })
    return (
        <div>
             {albumArray}
        </div>
    );
}

export default AlbumList;