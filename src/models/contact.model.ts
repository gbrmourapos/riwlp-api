import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../context/connection";

interface ContactAttributes {
  id: number;
  name: string;
  email: string;
  message: string;
}

interface ContactInput extends Optional<ContactAttributes, "id"> {}
interface ContactOuput extends Required<ContactAttributes> {}

class Contact
  extends Model<ContactAttributes, ContactInput>
  implements ContactAttributes
{
  public id!: number;
  public name!: string;
  public email!: string;
  public message!: string;
}

Contact.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

export { Contact, ContactInput, ContactOuput };
