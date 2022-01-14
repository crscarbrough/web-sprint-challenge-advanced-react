import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/checkout form/i);
  expect(header).toBeInTheDocument();
});

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstName = screen.queryByLabelText(/first name:/i);
  userEvent.type(firstName, "Ruby");

  const lastName = screen.queryByLabelText(/last name:/i);
  userEvent.type(lastName, "Harrt");

  const address = screen.queryByLabelText(/address:/i);
  userEvent.type(address, "530 Earth");

  const city = screen.queryByLabelText(/city:/i);
  userEvent.type(city, "Milky Way");

  const state = screen.queryByLabelText(/state:/i);
  userEvent.type(state, "Space");

  const zip = screen.queryByLabelText(/zip:/i);
  userEvent.type(zip, "1234");

  const checkout = screen.getByRole("button");
  userEvent.click(checkout);

  const successMessage = await screen.getByTestId("successMessage");
  expect(successMessage).toBeInTheDocument();
});
