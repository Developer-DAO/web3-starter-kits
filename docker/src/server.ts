import process from "process";
import express, { Express, Request, Response} from "express";

const PORT = process.env.PORT || 8080;
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Docker makes life easy!");
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
});