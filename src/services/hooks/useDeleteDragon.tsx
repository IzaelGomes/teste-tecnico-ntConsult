import { useMutation, useQueryClient } from "react-query";
import { deleteDragon } from "../dragon";

export const useDeleteDragon = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteDragon,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dragons"] });
    },
  });
};
