export type TDragon = {
  id: string;
  name: string;
  createdAt: string;
  type: string;
  histories: string[];
};

export type TCreateDragon = Omit<TDragon, "id">;

export type TUpdateDragon = Omit<TDragon, "createdAt">;
