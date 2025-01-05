import { TDragon } from "../../services/dragon-types";

export const orderDragonsByName = (dragons?: TDragon[]) => {
  return (
    dragons?.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;

      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;

      return 0;
    }) ?? []
  );
};
