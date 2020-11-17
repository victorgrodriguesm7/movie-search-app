import React from "react";
import IMovieDTO from "../../interfaces/movieDto";
import "./index.css";

export default function Movie({id, title, year, director, synopsis}: IMovieDTO){
    return (
        <div className="movie">
            <h1>{title}</h1>
            <img src={`http://localhost:3333/images/${id}.jpg`} alt={title}/>
            <p className="year">({year})</p>
        </div>
    );
}