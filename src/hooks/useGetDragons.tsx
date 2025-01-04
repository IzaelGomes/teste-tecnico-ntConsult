import { useQuery } from "react-query";
import { getAllDragons } from "../services/dragon";

export const useGetDragons = () => {
  const data = useQuery({
    queryFn: getAllDragons,
  });
  return data;
};
