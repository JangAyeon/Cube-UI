import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Chip } from ".";

describe("Chip Component", () => {
  it("renders with default props", () => {
    render(<Chip>Default Chip</Chip>);
    const chipElement = screen.getByText("Default Chip");
    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveClass("bg-primary", "min-h-10", "rounded-md");
  });

  it("applies custom class name", () => {
    render(<Chip className="custom-class">Custom Class Chip</Chip>);
    const chipElement = screen.getByText("Custom Class Chip");
    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveClass("custom-class");
  });

  it("renders with different color themes", () => {
    const { rerender } = render(<Chip colorTheme="gray">Gray Chip</Chip>);
    const chipElement = screen.getByText("Gray Chip");
    expect(chipElement).toHaveClass("bg-gray_100");

    rerender(<Chip colorTheme="red">Red Chip</Chip>);
    expect(chipElement).toHaveClass("bg-red_100");
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<Chip size="sm">Small Chip</Chip>);
    const chipElement = screen.getByText("Small Chip");
    expect(chipElement).toHaveClass("min-h-8", "text-Detail_100");

    rerender(<Chip size="lg">Large Chip</Chip>);
    expect(chipElement).toHaveClass("min-h-12", "text-Detail_300");
  });

  it("renders with different shapes", () => {
    const { rerender } = render(<Chip shape="round">Round Chip</Chip>);
    const chipElement = screen.getByText("Round Chip");
    expect(chipElement).toHaveClass("rounded-full");

    rerender(<Chip shape="square">Square Chip</Chip>);
    expect(chipElement).toHaveClass("rounded-md");
  });

  it("renders children correctly", () => {
    render(<Chip>Child Content</Chip>);
    const chipElement = screen.getByText("Child Content");
    expect(chipElement).toBeInTheDocument();
  });
});
