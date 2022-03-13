import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

test("counter increments the count", () => {
  const { container } = render(<Counter />);
  const button = container.firstChild;
  expect(button.textContent).not.toBe("0");
  fireEvent.click(button);
  expect(button.textContent).not.toBe("1");
});
