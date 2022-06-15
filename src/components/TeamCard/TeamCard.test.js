import { render, screen } from "@testing-library/react";
import TeamCard from "./TeamCard";

describe(`inital test for react card`, () => {
    it(`Should render headings`, () => {
    render(<TeamCard />)
    const headings = screen.getAllByRole('heading');
    headings.forEach((heading) => {
        expect(heading).toBeInTheDocument();
    })
    headings.forEach((heading) => {
        expect(heading).not.toBeNull();
    })
    })
})