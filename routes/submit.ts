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

router.post("/", (req: Request, res: Response) => {
  const { name, email, phone, github_link, stopwatch_time }: Submission =
    req.body;

  if (!name || !email || !phone || !github_link || !stopwatch_time) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const dbPath = path.join(__dirname, "../db.json");
  const submissions = JSON.parse(
    fs.readFileSync(dbPath, "utf-8")
  ) as Submission[];

  submissions.push({ name, email, phone, github_link, stopwatch_time });

  fs.writeFileSync(dbPath, JSON.stringify(submissions, null, 2), "utf-8");

  res.status(200).json({ message: "Submission saved successfully" });
});

export default router;
