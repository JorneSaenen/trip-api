// Importeer Mongoose
import mongoose from "mongoose";

// Definieer het schema voor uitgaven
const ExpenseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Definieer het schema voor trips
const TripSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  destination: {
    type: String,
    required: true,
    trim: true,
  },
  information: {
    type: String,
    required: false,
    trim: true,
  },
  expenses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Expense",
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Maak en exporteer de modellen
const Trip = mongoose.model("Trip", TripSchema);
const Expense = mongoose.model("Expense", ExpenseSchema);

export { Trip, Expense };
