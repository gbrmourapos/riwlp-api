import { Request, Response } from "express";
import { create } from "../repositories/contact.repository";
import { ContactRequestDTO } from "../types/contact.type";


const createContact = async (req: Request, res: Response) => {
  try {
    const contactRequest: ContactRequestDTO = req.body;
    const contact = await create({
      name: contactRequest.name,
      email: contactRequest.email,
      message: contactRequest.message
    });

    const contactResponse = {
      name: contact.name,
      email: contact.email,
      id: contact.id,
    };

    return res.status(200).send(contactResponse);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export { createContact };
