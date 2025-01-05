import { useQuery } from "react-query";
import { getDragon } from "../dragon";

export const useGetDragon = (id?: string) => {
  const data = useQuery({
    queryFn: () => (id ? getDragon(id) : undefined),
    queryKey: ["dragon", id],
    enabled: !!id,
  });

  return data;
};
