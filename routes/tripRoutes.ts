import express from "express";
import {
  createTrip,
  deleteTrip,
  getAllTrips,
  getTripById,
  updateTrip,
} from "../controllers/tripController";

const router = express.Router();

router
  .get("/", getAllTrips)
  .get("/:id", getTripById)
  .post("/", createTrip)
  .put("/:id", updateTrip)
  .delete("/:id", deleteTrip);

export default router;
