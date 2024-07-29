type ContactRequestDTO = {
    name: string;
    email: string;
    message: string;
  };
  
  type ContactResponseDTO = {
    id: number;
    name: string;
    email: string;
    message: string;
  };
  
  export { ContactRequestDTO, ContactResponseDTO };
  