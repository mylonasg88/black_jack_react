import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";
import { createDeck } from "../utils/utils";

test("renders", () => {
  const { baseElement, getByText, container } = render(<Home />);
  expect(baseElement).toBeDefined();
  expect(getByText("Black Jack")).toBeInTheDocument();

  // console.log(container.querySelector("div.card")?.textContent);

  // Must have 3 titles on the page
  const titles = [
    "Black Jack",
    /^Player points: (\d|\d\d)$/,
    /^Dealer points: 0/,
  ];

  container.querySelectorAll("ion-title").forEach((element, index) => {
    expect(element.textContent).toMatch(titles[index]);
  });

  // Must have 2 buttons on the page
  expect(getByText("HIT")).toBeInTheDocument();
  expect(getByText("STICK")).toBeInTheDocument();

  const buttons = container.querySelectorAll("ion-button");
  expect(buttons.length).toBe(2);
  expect(buttons[0].textContent).toBe("HIT");
});

test("Increase user points by user click", () => {
  const { getByText } = render(<Home />);

  const playerPoints_1 = (" " + getByText(/^Player points:/).textContent).slice(
    1
  ); // same result as: /^Player points: (\d|\d\d)$/

  const hitBtn = getByText("HIT");
  hitBtn.click();
  const playerPoints_2 = getByText(/^Player points:/).textContent; // same result as: /^Player points: (\d|\d\d)$/

  console.log(playerPoints_1);
  console.log(playerPoints_2);
  expect(playerPoints_1).not.toEqual(playerPoints_2);

  console.log(hitBtn.textContent);
});

test("User wins (21) on first hand", () => {
  // mock createDeck() and return array with 2 cards

  // render Home
  const { baseElement, getByText, container } = render(<Home />);
  // find title with You Won
  const title = getByText("You won");

  // expect title to exist
});
