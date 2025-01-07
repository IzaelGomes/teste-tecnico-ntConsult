import { useMutation } from "react-query";
import { updateDragon } from "../dragon";

export const useUpdateDragon = () => {
  return useMutation({
    mutationFn: updateDragon,
  });
};
