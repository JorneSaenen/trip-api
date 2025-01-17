import express, { Request, Response } from "express";
const router = express.Router();
import { fileURLToPath } from "url";
import path, { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcPath = path.join(__dirname, "..");

router.get("/", (req: Request, res: Response) => {
  res.sendFile(srcPath + "/home.html");
});

export default router;
