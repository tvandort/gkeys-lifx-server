import * as express from "express";
import { json, urlencoded } from "body-parser";
import { check, validationResult } from "express-validator/check";
import Lights from "./lights";

const port = process.env.PORT || 3000;
const app = express();

app.use(json());
app.use(urlencoded());

app.use("/lights", Lights);

app.listen(port);

console.log(`Lights API server started on: ${port}`);
