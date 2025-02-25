import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
