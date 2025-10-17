import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));
// Only attempt to connect if MONGO_URI is provided. If not, skip DB connection so
// the server can still run locally without a database configured.
if (!process.env.MONGO_URI) {
  console.warn('MONGO_URI not set — skipping MongoDB connection.');
}

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
