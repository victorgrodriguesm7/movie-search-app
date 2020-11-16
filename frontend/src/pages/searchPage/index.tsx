import React, {useEffect, useMemo, useState} from "react";
import MovieModel from "../../models/movieModel";
import SearchPageController from "../../controller/SearchPageController"
import Movie from "../../components/Movie";
import "./index.css";

export default function SearchPage(){
    let [movies, setMovies] = useState(Array<MovieModel>());
    let searchPageController = useMemo(() => new SearchPageController(), []);
    useEffect(() => {
        searchPageController.getMovies().then((listMovies) => {
            setMovies(listMovies);
        })
    }, [movies, searchPageController])
    return (
        <div>
            <section className="header">
                <h1>Search Your Movie</h1>
            </section>

            <form className="search-form">
                <input type="text"/>
                <button>Search</button>
            </form>

            <h3>Sharing a few of our favourites movies</h3>
            <div className="movie-list">
                {
                    movies.map((movie) =>{
                        return (<Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            year={movie.year}
                            director={movie.director}
                            synopsis={movie.synopsis}
                        />);
                    })
                }
            </div>
        </div>
    );
}