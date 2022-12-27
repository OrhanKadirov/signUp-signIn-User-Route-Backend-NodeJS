import express from "express";
import { getUserWalet, createUserWalet } from "../controlers/customers.js";

const router = express.Router();

// Kustomer Route
router.get("/getUserWalet/:id", getUserWalet);
router.post("/createUserWalet", createUserWalet);

export default router;
