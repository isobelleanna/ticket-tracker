import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe(`initial tests for react app`, () => {
    it('should render nav', () => {
        render(<App />);
        const nav = screen.getByRole(('navigation'))
        expect(nav).toBeInTheDocument()
    });
    });

describe(`Testing user interaction`, () => {
    it('should show form when the add user button is pressed', () => {
        render(<App />);
        const addUserButton = screen.getByTestId("addButton");
        userEvent.click(addUserButton);
        const form = screen.getByTestId("userForm");
        expect(form).toBeInTheDocument();
        expect(form).toBeTruthy();
        expect(addUserButton).not.toBeInTheDocument();
    })
})