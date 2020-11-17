import React, {useEffect, useMemo, useState} from "react";
import MovieModel from "../../models/movieModel";
import SearchPageController from "../../controller/SearchPageController"
import Movie from "../../components/Movie";
import "./index.css";

export default function SearchPage(){
    let [movies, setMovies] = useState(Array<MovieModel>());
    let [filteredMovies, setFilteredMovies] = useState(Array<MovieModel>())
    let [searchQuery, setSearchQuery] = useState("");

    let searchPageController = useMemo(() => new SearchPageController(), []);

    useEffect(() => {
        searchPageController.getMovies().then((listMovies) => {
            setMovies(listMovies);
        })
    }, [searchPageController])

    function handleSearchMovie(event: React.FormEvent<HTMLFormElement>): void{
        event.preventDefault()
        
        if (!searchQuery){
            setFilteredMovies(movies);
            return;
        } 

        let filtered = movies.filter(
            (movie) => movie.title.toLowerCase().search(searchQuery.toLowerCase()) !== -1 
        );
        
        setFilteredMovies(filtered);
    }
    
    return (
        <div>
            <section className="header">
                <h1>Search Your Movie</h1>
            </section>

            <form className="search-form" onSubmit={(event) => handleSearchMovie(event)}>
                <input 
                    type="text"
                    onChange={(e) => setSearchQuery(e.target.value)}/>
                <button>Search</button>
            </form>

            <h3>Sharing a few of our favourites movies</h3>
            <div className="movie-list">
                {
                    !filteredMovies.length ?
                    movies.map((movie) =>{
                        return (<Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            year={movie.year}
                            director={movie.director}
                            synopsis={movie.synopsis}
                        />);
                    }) : filteredMovies.map((movie) =>{
                        return (<Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            year={movie.year}
                            director={movie.director}
                            synopsis={movie.synopsis}
                        />);})
                }
            </div>
        </div>
    );
}