import * as express from "express";
import Commands from "./Commands";

import { check, validationResult } from "express-validator/check";

const app = express();

app.post(
  "/",
  [
    check("state", `State must be "on" or "off"`)
      .exists()
      .trim()
      .isIn(["on", "off"])
  ],
  function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }

    Commands[req.body.state]()
      .then(() => Promise.resolve(200))
      .catch(() => Promise.resolve(500));

    return res.status(200).send();
  }
);

export default app;
