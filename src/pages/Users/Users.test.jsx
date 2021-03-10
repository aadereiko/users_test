import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import { Users } from "./Users";
import { Form } from "react-bootstrap";
let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const fakeUsers = [
  {
    name: "2",
    id: 1,
    username: "3",
  },
];

it("renders user data", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUsers),
    })
  );

  await act(async () => {
    render(
      <Users users={fakeUsers} onNameFilterChange={() => {}} />,
      container
    );
  });

  const tdElements = container.querySelectorAll("td");

  expect(tdElements[0].textContent).toBe("1");
  expect(tdElements[1].textContent).toBe("2");
  expect(tdElements[2].textContent).toBe("3");

  global.fetch.mockRestore();
});

it("changes value while keyboard is clicking", () => {
  const onChange = jest.fn();
  const wrapper = shallow(
    <Users users={[]} onNameFilterChange={onChange} />
  );
  wrapper.find(Form.Control).simulate("change", { target: { value: "a" } });
  expect(onChange).toHaveBeenCalledTimes(1);
});

// it("changes value while keyboard is clicking", () => {
//   const onChange = jest.fn();

//   act(() => {
//     render(<Users users={[]} onNameFilterChange={(val) => console.log(val)} />, container);
//   });

//   const input = document.querySelector("[data-testid=input]");

//   act(() => {
//     input.dispatchEvent(new Event("input", { bubbles: true }));
//   });

//   expect(onChange).toHaveBeenCalledTimes(1);
// });
