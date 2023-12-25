import React from "react";
import {useState, useEffect} from "react";
import axios from "../../axios";
import {Link} from "react-router-dom";
import {Carousel} from 'flowbite-react';

const Originals = ({title, fetchURL}) => {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchURL]);


    return (
        <div className="overflow-x-hidden w-full">
            {title === "Top Rated" ? (
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel>
                        {movies.map((movie) => (
                            <Link to={`/details/${movie.id}`}>
                                <div className="w-full hover:z-50 transition duration-200 ease-in transform">
                                    <img
                                        className="object-fill w-full h-[50rem] "
                                        src={`${base_url}${movie.poster_path}`}
                                        alt={movie.name}
                                    />
                                </div>
                            </Link>
                        ))}
                    </Carousel>
                </div>
                )
                : (
                    <div className="text-white bg-black w-full p-10 ">
                        <h1 className="text-2xl font-bold ">{title}</h1>
                        <div className="flex gap-2 p-3 -ml-3 w-full overflow-x-auto">
                            {movies.map((movie) => (
                                <Link to={`/details/${movie.id}`}>
                                    <div className="w-44 hover:z-50 transition duration-200 ease-in transform">
                                        <img
                                            className="object-cover w-44 h-60 p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
                                            src={`${base_url}${movie.poster_path}`}
                                            alt={movie.name}
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )
            }


        </div>
    );
}
export default Originals;