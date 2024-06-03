


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdSaveAlt } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faHeart, faBookmark, faPlay } from '@fortawesome/free-solid-svg-icons';
import "./MoviesDetail.css";

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a6d86a939602ad4fa0ae979abebc93f3`)
            .then(res => res.json())
            .then(json => {
                setMovie(json);
            })
          
    }, [id]);
// this is a loading menuuu
    if (!movie) return (
        <div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
            <span className='sr-only'>Loading...</span>
            <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
        </div>
    );

    return (
        <div className="flex flex-col md:flex-row items-start p-6 text-white bg-slate-800 cursor-pointer">
            <div className="image-container max-w-xs md:max-w-sm mb-4 md:mb-0 rounded-lg">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-lg" />
                <div className="icon-overlay">
                    <MdSaveAlt />
                </div>
            </div>
            <div className="md:ml-6">
                <div className='flex items-center'>
                    <h1 className="text-xl font-bold mb-4">{movie.title}</h1>
                </div>
               
                <p className="mb-4 w-[900px] text-[23px]">{movie.overview}</p>

                <div className="icon-buttons mt-5 gap-5">
                    <button className="icon-button" title="Add to List">
                        <FontAwesomeIcon icon={faList} />
                    </button>
                    <button className="icon-button" title="Add to Favorites">
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button className="icon-button" title="Add to Bookmarks">
                        <FontAwesomeIcon icon={faBookmark} />
                    </button>
                </div>
                <p className="mt-4 text-[20px]"><strong>Director:</strong> {movie.director}</p>
                <p className='mt-4 text-[20px]'><strong>Popularity:</strong> {movie.popularity}</p>
                <p className='mt-4 text-[20px]'><strong>Released:</strong> {movie.release_date}</p>
                <p className='mt-4 text-[20px]'><strong>Average Vote:</strong> {movie.vote_average}</p>
                <p className='mt-4 text-[20px]'><strong>Vote Count:</strong> {movie.vote_count}</p>
            </div>
        </div>
    );
}

export default MovieDetail;
