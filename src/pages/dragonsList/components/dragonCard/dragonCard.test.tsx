import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { DragonCard } from "./dragonCard";
import { BrowserRouter } from "react-router-dom";
import { PropsWithChildren } from "react";

const AllProviders = ({ children }: PropsWithChildren) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const mockDragon = {
  id: "5",
  name: "Safari",
};

describe("DragonCard", () => {
  test("it should render the dragon card", () => {
    render(
      <AllProviders>
        <DragonCard data={mockDragon} />
      </AllProviders>
    );

    expect(
      screen.getByRole("heading", { name: /safari/i })
    ).toBeInTheDocument();
    const link = screen.getByRole("link", { name: /ver mais/i });
    expect(link).toHaveAttribute("href", "/dragons/details/5");
    expect(link).toHaveAccessibleDescription(/safari/i);
  });

  test("it should delete a dragon", async () => {
    const mockOnDeleteDragon = vi.fn();

    render(
      <AllProviders>
        <DragonCard data={mockDragon} onDelete={mockOnDeleteDragon} />
      </AllProviders>
    );

    const deleteButton = screen.getByRole("button", {
      name: /excluir/i,
    });

    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(mockOnDeleteDragon).toHaveBeenCalledWith("5");
    });
  });
});
