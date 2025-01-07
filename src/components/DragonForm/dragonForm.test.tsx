import { fireEvent, render, screen } from "@testing-library/react";
import { vi, describe, test, expect } from "vitest";
import { DragonForm } from "./dragonForm";

describe("CreateDragon", () => {
  test("it should submit the dragon data", async () => {
    const mockOnSubmit = vi.fn();
    render(<DragonForm onSubmit={mockOnSubmit} />);

    fireEvent.change(screen.getByLabelText("name"), {
      target: { value: "sunFire" },
    });

    fireEvent.change(screen.getByLabelText("type"), {
      target: { value: "5" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /enviar/i }));

    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: "sunFire",
      type: "5",
    });
  });

  test("it should fill the input form with the passed data", async () => {
    const mockDragon = {
      id: "5",
      name: "Dreamfyre",
      type: "7",
      histories: [],
    };
    const mockOnSubmit = vi.fn();

    render(<DragonForm onSubmit={mockOnSubmit} dragonData={mockDragon} />);

    const inputName = screen.getByLabelText("name");
    const inputType = screen.getByLabelText("type");
    expect(inputName).toHaveValue("Dreamfyre");
    expect(inputType).toHaveValue("7");
    fireEvent.submit(screen.getByRole("button", { name: /enviar/i }));
    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: "Dreamfyre",
      type: "7",
    });
  });
});
