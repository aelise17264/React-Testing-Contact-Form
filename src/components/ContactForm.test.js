import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';

test('able to fill out and submit contact form', () => {
render(<ContactForm/>);

 const firstNameInput = screen.getByPlaceholderText(/ed/i)
 const lastNameInput = screen.getByPlaceholderText(/burke/i)
 const emailInput = screen.getByLabelText(/email/i)
 const messageInput = screen.getByLabelText(/message/i)

 fireEvent.change(firstNameInput, {target: {value: 'Ian'}});
 fireEvent.change(lastNameInput, {target: {value: 'Brander'}});
  fireEvent.change(emailInput, {target: {value: 'email@email.com'}});
  fireEvent.change(messageInput, {target: {value: 7}})


})