import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { DragonCardDetails } from "./dragonCardDetails";
import "./style.css";

const mockDragon = {
  id: "5",
  name: "Sunfyre",
  type: "2",
  createdAt: "2025-01-05",
  histories: [],
};

describe("dragonCardDetails", () => {
  test("it should show dragon information", () => {
    render(<DragonCardDetails data={mockDragon} />);

    expect(screen.getByText(`05/01/2025`)).toBeInTheDocument();
    expect(screen.getByText(/Sunfyre/)).toBeInTheDocument();
  });
});
