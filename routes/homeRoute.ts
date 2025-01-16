import express, { Request, Response } from "express";
import html from "../html";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send(html);
});

export default router;
