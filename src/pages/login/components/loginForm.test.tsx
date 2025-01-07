import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { LoginForm } from "./loginForm";
import { BrowserRouter } from "react-router-dom";

describe("loginForm", () => {
  test("it should submit the login credentials", () => {
    const mockHandleUserSignIn = vi.fn();
    render(<LoginForm onSubmit={mockHandleUserSignIn} />, {
      wrapper: BrowserRouter,
    });
    fireEvent.change(screen.getByLabelText("username"), {
      target: { value: "admin" },
    });
    fireEvent.change(screen.getByLabelText("password"), {
      target: { value: "123456" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /entrar/i }));

    expect(mockHandleUserSignIn).toBeCalledWith({
      user: "admin",
      password: "123456",
    });
  });
});
