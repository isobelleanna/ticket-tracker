import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CounterCard from "./CounterCard"

describe(`inital test for react counter`, () => {
    it('should render counter buttons', () => {
        render(<CounterCard />);
        const buttons = screen.getAllByRole('button');
        buttons.forEach((button) => {
            expect(button).toBeInTheDocument()
        })
    })
})

describe(`Test user interactions`, () => {
    it('should increase the counter by 1', () => {
        render(<CounterCard />);
        const counterValue = screen.getByText("0");
        const increaseButton = screen.getByText("+");
        userEvent.click(increaseButton);
        expect(counterValue).toHaveTextContent("1");
    })
    it('should increase and decrease the counter', () => {
        render(<CounterCard />);
        const counterValue = screen.getByText("0");
        const increaseButton = screen.getByText("+");
        const decreaseButton = screen.getByText("-");
        userEvent.click(increaseButton);
        userEvent.click(increaseButton);
        userEvent.click(decreaseButton);
        expect(counterValue).toHaveTextContent("1");
    })
    it('should not decrease when the value is 0', () => {
        render(<CounterCard />);
        const counterValue = screen.getByText("0");
        const decreaseButton = screen.getByText("-");
        userEvent.click(decreaseButton);
        expect(counterValue).toHaveTextContent("0");
    })
})