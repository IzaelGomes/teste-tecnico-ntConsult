import { TDragon } from "../../services/dragon-types";

export const orderDragonsByName = (dragons?: TDragon[]) => {
  return (
    dragons?.sort((a, b) => {
      if (a.name.toLocaleUpperCase() > b.name.toLocaleUpperCase()) return 1;

      if (a.name < b.name) return -1;

      return 0;
    }) ?? []
  );
};
