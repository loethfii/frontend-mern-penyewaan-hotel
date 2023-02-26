import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router } from "react-router-dom";
// import { Link } from "react-router-dom";

//test button disable
test("Should not allowed click button if isDisabled is parent", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

//test buffering
test("Should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

//test link a
test("Should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

//test link
test("Should render <link> component", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
