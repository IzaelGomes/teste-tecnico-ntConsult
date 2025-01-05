import { fireEvent, render, screen } from "@testing-library/react";
import { vi, describe, test, expect } from "vitest";
import { CreateDragonForm } from "./createDragonForm";

describe("CreateDragon", () => {
  test("it should submit the dragon data", async () => {
    const mockOnCreate = vi.fn();

    render(<CreateDragonForm onCreate={mockOnCreate} />);

    fireEvent.change(screen.getByLabelText("name"), {
      target: { value: "sunFire" },
    });

    fireEvent.change(screen.getByLabelText("type"), {
      target: { value: "5" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /enviar/i }));

    expect(mockOnCreate).toHaveBeenCalledWith({
      name: "sunFire",
      type: "5",
    });
  });
});
