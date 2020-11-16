import api from "../../services/api";
import MovieModel from "../../models/movieModel";
import IMovieDTO from "../../interfaces/movieDto";

export default class searchPageController {

    async getMovies(): Promise<Array<MovieModel>>{
        return await api.get("/movies").then((res) => {
            return res.data.movies.map((movie: IMovieDTO) => {
                return new MovieModel({
                    id: movie.id,
                    title: movie.title,
                    year: movie.year,
                    director: movie.director,
                    synopsis: movie.synopsis
                })
            })
        })
    }
    
}