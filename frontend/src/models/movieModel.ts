import IMovieDto from "../interfaces/movieDto";

export default class MovieModel {
    id: number;
    title: string;
    year: number;
    director: string;
    synopsis: string;

    constructor({id, title, year, director, synopsis} : IMovieDto){
        this.id = id;
        this.title = title;
        this.year = year;
        this.director = director;
        this.synopsis = synopsis;
    }
}