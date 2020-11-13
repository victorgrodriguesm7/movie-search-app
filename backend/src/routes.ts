import { Router } from "express";
import movieController from "./controllers/movieController";
const routes = Router();

routes.get("/movies", movieController.index);
routes.post("/movies", movieController.create);

export default routes;