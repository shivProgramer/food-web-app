import express from "express";
import dotenv from "dotenv";
import connect_db from "./db/connect_db.js";
dotenv.config();
connect_db();
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
