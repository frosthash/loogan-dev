import express from "express";
import cors from "cors";
import schools from "./api/schools.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/schools", schools);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
