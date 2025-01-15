import express from "express";
const router = express.Router();
import {
  createExpense,
  deleteExpense,
  getExpensesPerTrip,
  updateExpense,
} from "../controllers/expensesController";

router
  .get("/:tripId", getExpensesPerTrip)
  .post("/:tripId", createExpense)
  .put("/:expenseId", updateExpense)
  .delete("/:expenseId", deleteExpense);

export default router;
