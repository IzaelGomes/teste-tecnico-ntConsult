import { useQuery } from "react-query";
import { getAllDragons } from "../dragon";

export const useGetDragons = () => {
  const data = useQuery({
    queryFn: getAllDragons,
    queryKey: ["dragons"],
  });
  return data;
};
