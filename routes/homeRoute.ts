import express, { Request, Response } from "express";
import { html } from "../helpers";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send(html);
});

export default router;
