import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import feedbackHandler from "./api/feedback.js";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/feedback", feedbackHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
