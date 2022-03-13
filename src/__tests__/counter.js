import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

afterEach(() => {
  window.localStorage.removeItem("count");
});

test("counter increments the count", () => {
  const { container } = render(<Counter />);
  const button = container.firstChild;
  expect(button.textContent).toBe("0");
  fireEvent.click(button);
  expect(button.textContent).toBe("1");
});

test("reads and writes to localStorage", () => {
  window.localStorage.setItem("count", "3");
  const { container } = render(<Counter />);
  const button = container.firstChild;
  expect(button.textContent).toBe("3");
  fireEvent.click(button);
  expect(window.localStorage.getItem("count")).toBe("4");
  expect(button.textContent).toBe("4");
});
