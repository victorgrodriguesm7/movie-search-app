import { Router } from "express";

const routes = Router();


// Return a list of Movies
routes.get("/movies", (req, res) => {
    return res.send("Index Movies");
})

export default routes;