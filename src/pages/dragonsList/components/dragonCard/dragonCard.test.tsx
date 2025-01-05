import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { DragonCard } from "./dragonCard";
import { BrowserRouter } from "react-router-dom";

describe("DragonCard", () => {
  test("it renders a dragon information", () => {
    render(<DragonCard id="5" name="Safari" histories={[]} type="5" />, {
      wrapper: BrowserRouter,
    });

    expect(
      screen.getByRole("heading", { name: /safari/i })
    ).toBeInTheDocument();
    const link = screen.getByRole("link", { name: /ver mais/i });
    expect(link).toHaveAttribute("href", "/dragons/details/5");
    expect(link).toHaveAccessibleDescription(/safari/i);
  });
});
