import { api } from "../lib/axios";
import { TDragon } from "./dragon-types";

export const getAllDragons = () => {
  const data = api.get<TDragon>("/dragon");

  return data;
};
