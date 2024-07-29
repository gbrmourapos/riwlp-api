import { Router } from "express";
import { createContact } from "../controllers";

const contactRoute = Router();

contactRoute.post("/", createContact);

export { contactRoute };
