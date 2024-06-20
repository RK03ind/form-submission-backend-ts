import { Router, Request, Response } from "express";
import fs from "fs";
import path from "path";

const router = Router();

interface Submission {
  name: string;
  email: string;
  phone: string;
  github_link: string;
  stopwatch_time: string;
}

router.get("/", (req: Request, res: Response) => {
  const { index } = req.query;

  if (index === undefined) {
    return res.status(400).json({ error: "Index query parameter is required" });
  }

  const dbPath = path.join(__dirname, "../db.json");
  const submissions = JSON.parse(
    fs.readFileSync(dbPath, "utf-8")
  ) as Submission[];

  const idx = parseInt(index as string, 10);

  if (isNaN(idx) || idx < 0 || idx >= submissions.length) {
    return res.status(400).json({ error: "Invalid index" });
  }

  res.status(200).json(submissions[idx]);
});

export default router;
