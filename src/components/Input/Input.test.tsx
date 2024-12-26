import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from ".";

describe("Input Component", () => {
  test("renders the input with a placeholder", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  test("applies custom width and height classes", () => {
    render(<Input width="w-[200px]" height="h-[50px]" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("w-[200px]");
    expect(input).toHaveClass("h-[50px]");
  });

  test("is disabled when isDisabled prop is true", () => {
    render(<Input isDisabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });
});
