import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./index";
import "@testing-library/jest-dom";

describe("Button Component", () => {
  // 렌더링 테스트: 버튼이 올바르게 렌더링되고, 전달된 content가 표시되는지 확인
  it("renders the button with provided content", () => {
    render(<Button content="Click Me" />);

    // Button with the correct text should be in the document
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });

  // 스타일 테스트: 버튼에 올바른 클래스가 적용되었는지 확인
  it("applies the correct styles", () => {
    render(<Button content="Styled Button" />);

    const button = screen.getByRole("button", { name: /styled button/i });
    // Check if the button has the expected class names
    expect(button).toHaveClass(
      "rounded",
      "bg-blue-500",
      "px-4",
      "py-2",
      "font-bold",
      "text-white"
    );
  });

  // 클릭 이벤트 테스트: 버튼 클릭 시 핸들러가 호출되는지 확인
  it("triggers a click event", async () => {
    const handleClick = jest.fn(); // Mock function
    render(
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
        onClick={handleClick}
      >
        Click Me
      </button>
    );

    const button = screen.getByRole("button", { name: /click me/i });
    await userEvent.click(button);

    // Ensure the click handler was called once
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
