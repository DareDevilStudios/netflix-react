import React from 'react';
import Originals from './Originals'
import request from '../../request'
import {useLocation} from 'react-router-dom'

const Display = () => {
    const location = useLocation();
    console.log(location.pathname);

    return(
        <>
            <div>
                <Originals title="Top Rated" fetchURL={request.fetchTopRated} />
                <Originals title="Trending Now" fetchURL={request.fetchTrending} />
                <Originals title="Netflix Originals" fetchURL={request.fetchNetflixOriginals} />
                <Originals title="Action Movies" fetchURL={request.fetchActionMovies} />
                <Originals title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
                <Originals title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
                <Originals title="Romance Movies" fetchURL={request.fetchRomanceMovies} />
                <Originals title="Documentaries" fetchURL={request.fetchDocumentaries} />

            </div>
        </>
    )
}
export default Display;