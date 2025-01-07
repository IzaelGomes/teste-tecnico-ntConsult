import { useMutation } from "react-query";
import { createDragon } from "../dragon";

export const useCreateDragon = () => {
  return useMutation({
    mutationFn: createDragon,
    onSuccess: () => {
      alert("Dragão criado com sucesso!");
    },
    onError(error) {
      alert("Erro ao criar o dragão");
      console.log(error);
    },
  });
};
