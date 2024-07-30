import { Request, Response } from "express";
import { create } from "../repositories/contact.repository";
import { ContactRequestDTO } from "../types/contact.type";


const createContact = async (req: Request, res: Response) => {
  console.log('[Contact::GET] Start')
  try {
    const contactRequest: ContactRequestDTO = req.body;
    console.log('[Contact::GET] Payload:', contactRequest);

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
    console.log('[Contact::GET] Error:', err);
    return res.status(500).send(err);
  } finally {
    console.log('[Contact::GET] End')
  }
};

export { createContact };
