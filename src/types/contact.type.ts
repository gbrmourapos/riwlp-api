type ContactRequestDTO = {
    name: string;
    email: string;
  };
  
  type ContactResponseDTO = {
    id: number;
    name: string;
    email: string;
  };
  
  export { ContactRequestDTO, ContactResponseDTO };
  