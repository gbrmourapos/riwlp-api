import { Contact } from "../models/contact.model";
import 'dotenv/config';

const isDev = process.env.NODE_ENV === "development";

const dbInit = () => {
  Contact.sync({ alter: isDev, force: isDev });
};

export default dbInit;
