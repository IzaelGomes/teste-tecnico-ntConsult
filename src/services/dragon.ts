import { api } from "../lib/axios";
import { TCreateDragon, TDragon } from "./dragon-types";

export const getAllDragons = async () => {
  const { data } = await api.get<TDragon[]>("/dragon");

  return data;
};

export const getDragon = async (id: string) => {
  const { data } = await api.get<TDragon>(`/dragon/${id}`);

  return data;
};

export const createDragon = async (dragon: TCreateDragon) => {
  await api.post(`/dragon`, dragon);
};

export const updateDragon = async (id: string) => {
  await api.put(`/dragon/${id}`);
};

export const deleteDragon = async (id: string) => {
  await api.delete(`/dragon/${id}`);
};
