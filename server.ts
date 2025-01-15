import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const PORT = process.env.PORT || 3000;
const app = express();
import tripRoutes from "./routes/tripRoutes";
import expensesRoutes from "./routes/expensesRoutes";

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/trips", tripRoutes);
app.use("/api/v1/expenses", expensesRoutes);

// Connect to MongoDB and start the server
app.listen(PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Server listening on port ${PORT}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});
