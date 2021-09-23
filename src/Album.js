import React from 'react';

const Album = ( {id, title, artist, album, selectSong} ) => {
    return (
        <div className='tc bg-light-black dib br3 pa3 ma2 grow bw2 shadow-5 album'>
                <p>{ title}</p>
                <p>{ album}</p>
            <button onClick = {selectSong} id={title} className={artist} >Play Song</button>
        </div>
    )
}

export default Album;