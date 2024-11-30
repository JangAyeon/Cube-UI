import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Button Component", () => {
  it("renders the button with default properties", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button", { name: "Click Me" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-blue-500 text-white hover:bg-blue-600");
    expect(button).toHaveClass("h-10 px-4 text-base");
    expect(button).toHaveClass("rounded-md");
  });

  it("applies the correct color theme", () => {
    render(<Button colorTheme="red">Delete</Button>);
    const button = screen.getByRole("button", { name: "Delete" });

    expect(button).toHaveClass("bg-red-500 text-white hover:bg-red-600");
  });

  it("applies the correct size", () => {
    render(<Button size="lg">Large Button</Button>);
    const button = screen.getByRole("button", { name: "Large Button" });

    expect(button).toHaveClass("h-12 px-6 text-lg");
  });

  it("applies the correct variant", () => {
    render(<Button variants="outline">Outlined Button</Button>);
    const button = screen.getByRole("button", { name: "Outlined Button" });

    expect(button).toHaveClass("border border-current bg-transparent");
  });

  it("applies the correct shape", () => {
    render(<Button shape="round">Round Button</Button>);
    const button = screen.getByRole("button", { name: "Round Button" });

    expect(button).toHaveClass("rounded-full");
  });

  it("disables the button when isDisabled is true", () => {
    render(<Button isDisabled>Disabled Button</Button>);
    const button = screen.getByRole("button", { name: "Disabled Button" });

    expect(button).toBeDisabled();
    expect(button).toHaveClass("cursor-not-allowed opacity-50");
  });

  it("displays loading state when isLoading is true", () => {
    render(<Button isLoading>Submit</Button>);
    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
    expect(button).toHaveClass("cursor-not-allowed opacity-50");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByRole("button", { name: "Click Me" });

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("merges custom className with default classes", () => {
    render(<Button className="custom-class">Custom Class</Button>);
    const button = screen.getByRole("button", { name: "Custom Class" });

    expect(button).toHaveClass("custom-class");
    expect(button).toHaveClass("bg-blue-500 text-white hover:bg-blue-600");
  });
});
