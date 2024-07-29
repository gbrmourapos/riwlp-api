import { Contact, ContactInput, ContactOuput } from "../models";

const create = async (payload: ContactInput): Promise<ContactOuput> => {
  return await Contact.create(payload);
};

const update = async (
  id: number,
  payload: Partial<ContactInput>
): Promise<ContactOuput> => {
  const user = await Contact.findByPk(id);

  if (!Contact) {
    throw new Error("Contact not found");
  }

  return await (user as Contact).update(payload);
};

const getById = async (id: number): Promise<ContactOuput> => {
  const user = await Contact.findByPk(id);

  if (!user) {
    throw new Error("Contact not found");
  }

  return user;
};

const deleteById = async (id: number): Promise<boolean> => {
  const deletedContactCount = await Contact.destroy({
    where: { id },
  });
  
  return !!deletedContactCount;
};

const getAll = async (): Promise<ContactOuput[]> => {
  return Contact.findAll();
};

export { create, update, getById, getAll, deleteById };
