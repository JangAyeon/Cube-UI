import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe("Button Component", () => {
  test("renders the button with default props", () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByRole("button", { name: /default button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-blue-500 text-white"); // Default colorTheme & variants
  });

  test("applies the correct class based on colorTheme and variants", () => {
    render(
      <Button colorTheme="red" variants="outline">
        Red Outline Button
      </Button>
    );
    const button = screen.getByRole("button", { name: /red outline button/i });
    expect(button).toHaveClass("text-red-500 border-red-500 hover:bg-red-100");
  });

  test("applies the correct size and shape classes", () => {
    render(
      <Button size="lg" shape="round">
        Large Round Button
      </Button>
    );
    const button = screen.getByRole("button", { name: /large round button/i });
    expect(button).toHaveClass("h-12 px-6 text-lg rounded-full");
  });

  test("disables the button when isDisabled is true", () => {
    render(<Button isDisabled>Disabled Button</Button>);
    const button = screen.getByRole("button", { name: /disabled button/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass("cursor-not-allowed opacity-50");
  });

  test("applies loading styles when isLoading is true", () => {
    render(<Button isLoading>Loading Button</Button>);
    const button = screen.getByRole("button", { name: /loading button/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass("cursor-not-allowed opacity-50");
  });

  test("handles click events", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    const button = screen.getByRole("button", { name: /clickable button/i });

    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders with custom className", () => {
    render(<Button className="custom-class">Custom Class Button</Button>);
    const button = screen.getByRole("button", { name: /custom class button/i });
    expect(button).toHaveClass("custom-class");
  });

  test("renders a link style button", () => {
    render(
      <Button colorTheme="gray" variants="link">
        Link Button
      </Button>
    );
    const button = screen.getByRole("button", { name: /link button/i });
    expect(button).toHaveClass("text-gray-500 underline hover:text-gray-600");
  });

  test("renders a ghost style button", () => {
    render(
      <Button colorTheme="black" variants="ghost">
        Ghost Button
      </Button>
    );
    const button = screen.getByRole("button", { name: /ghost button/i });
    expect(button).toHaveClass("text-black bg-transparent hover:bg-gray-100");
  });
});
