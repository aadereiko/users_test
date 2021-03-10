import React from "react";

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { Header } from "./Header";
let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

it("links of header", () => {
  act(() => {
    render(<Header />, container);
  });
  expect(container.textContent).toBe('UsersLink 1Link 2');
});
