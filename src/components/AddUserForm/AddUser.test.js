import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddUserForm from "./AddUserForm";

describe(`initial tests for react form`, () => {
    it('should render heading', () => {
        render(<AddUserForm />)
        const inputs = screen.getAllByRole("textbox");
       inputs.forEach((input) => {
      expect(input).toBeInTheDocument();
    });
    })
})