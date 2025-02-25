import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import taskRoutes from "./src/routes/task.routes.js";
import connectDB from "./src/database/database.js";

dotenv.config();

const app = express();
// eslint-disable-next-line
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/task", taskRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

export default app;
