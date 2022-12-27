import { Walet } from "../models/Walet";
import jwt from "jsonwebtoken";

// Get User Walet

// Create User Walet

export const createUserWalet = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Log in please" });
    }

    const { mnemonic, xpub } = res.body;

    const newWalet = new Walet({
      mnemonic,
      xpub,
    });
    const responce = await newWalet.save();

    res.json(responce);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "server error" });
  }
};
