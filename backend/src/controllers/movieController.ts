import { Response, Request} from "express";
import connection from "../database/connection";

export default {
    async index(req: Request, res: Response) {
        let movies = await connection("movies").select("*");

        return res.json({ movies });
    },
    async create(req: Request, res: Response){
        let { title, year, director, synopsis } = req.body;

        try {
            await connection("movies")
            .insert({
                title,
                year,
                director,
                synopsis
            })
            return res.sendStatus(200);
        } catch (error) {
            return res.sendStatus(400).json({error});
        }

    }
}