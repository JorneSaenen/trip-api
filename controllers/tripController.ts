import { Expense, Trip } from "../models/TripModel";
import { Request, Response } from "express";

type createTypes = {
  name: String;
  destination: String;
  information: String;
};

export const getAllTrips = async (req: Request, res: Response) => {
  try {
    const trips = await Trip.find().populate("expenses");
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message ?? "Something went wrong" });
  }
};

export const getTripById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const trip = await Trip.findById(id).populate("expenses");
    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({ message: error.message ?? "Something went wrong" });
  }
};

export const createTrip = async (req: Request, res: Response) => {
  try {
    const { name, destination, information }: createTypes = req.body;

    const trip = await Trip.create({ name, destination, information });

    res.status(201).json(trip);
  } catch (error) {
    if (error.message.includes("validation")) {
      res.status(400).json({ message: error.message });
      return;
    }
    res.status(500).json({ message: error.message ?? "Something went wrong" });
  }
};

export const updateTrip = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, destination, information }: createTypes = req.body;
    const trip = await Trip.findByIdAndUpdate(
      id,
      { name, destination, information },
      { new: true }
    );
    res.status(200).json(trip);
  } catch (error) {
    if (error.message.includes("validation")) {
      res.status(400).json({ message: error.message });
      return;
    }
    res.status(500).json({ message: error.message ?? "Something went wrong" });
  }
};

export const deleteTrip = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { expenses } = await Trip.findById(id);

    if (expenses.length > 0) {
      await Expense.deleteMany({ _id: { $in: expenses } });
    }
    const trip = await Trip.findByIdAndDelete(id);

    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({ message: error.message ?? "Something went wrong" });
  }
};
