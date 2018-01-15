import * as express from "express";
import { check, validationResult } from "express-validator/check";
import Lights from "./lights";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/lights", Lights);

app.listen(port);

console.log(`Lights API server started on: ${port}`);
