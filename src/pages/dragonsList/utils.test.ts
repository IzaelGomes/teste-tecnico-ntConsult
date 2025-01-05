import { describe, expect, test } from "vitest";
import { TDragon } from "../../services/dragon-types";
import { orderDragonsByName } from "./utils";

describe("dragon list utils", () => {
  describe("orderDragonsByName", () => {
    test("it should order dragons alphabetically", () => {
      const unorderedDragons: TDragon[] = [
        {
          id: "1",
          name: "Firestorm",
          createdAt: "2023-01-15T14:30:00Z",
          type: "Fogo",
          histories: [
            "Derrotou um exército sozinho.",
            "Protegeu uma vila contra invasores.",
          ],
        },
        {
          id: "2",
          name: "Aquaflow",
          createdAt: "2022-11-20T09:45:00Z",
          type: "Água",
          histories: [
            "Resgatou marinheiros de um naufrágio.",
            "Explorou o fundo do oceano.",
          ],
        },
        {
          id: "3",
          name: "Windwhisper",
          createdAt: "2021-06-12T18:00:00Z",
          type: "Vento",
          histories: [
            "Guiou uma frota através de uma tempestade.",
            "Derrubou um baluarte com uma rajada de vento.",
          ],
        },
        {
          id: "4",
          name: "Rockmaw",
          createdAt: "2020-03-10T12:00:00Z",
          type: "Terra",
          histories: [
            "Construiu montanhas para proteger seu território.",
            "Ajudou uma aldeia durante um terremoto.",
          ],
        },
        {
          id: "5",
          name: "Shadowfang",
          createdAt: "2019-08-01T22:15:00Z",
          type: "Sombras",
          histories: [
            "Espionou o inimigo durante a noite.",
            "Desapareceu em pleno combate para enganar o adversário.",
          ],
        },
      ];
      const orderedDragonNames = [
        "Aquaflow",
        "Firestorm",
        "Rockmaw",
        "Shadowfang",
        "Windwhisper",
      ];
      const orderedDragons = orderDragonsByName(unorderedDragons);

      orderedDragons.forEach((element, index) => {
        expect(element.name).toEqual(orderedDragonNames[index]);
      });
    });
  });
});
