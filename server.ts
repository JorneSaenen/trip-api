import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import { specs } from "./swagger";
import tripRoutes from "./routes/tripRoutes";
import expensesRoutes from "./routes/expensesRoutes";
import homeRoute from "./routes/homeRoute";

// Variables
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger documentation
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use("/api/v1/trips", tripRoutes);
app.use("/api/v1/expenses", expensesRoutes);
app.use("/", homeRoute);

// Connect to MongoDB and start the server
app.listen(PORT, async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI environment variable is not set");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Server listening on port ${PORT}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});
