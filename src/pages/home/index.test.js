import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from ".";

describe("Home Component", () => {

  test("must be zero valued", () => {
    render(<Home />)
    const HomeTitle = screen.getByText("0")
    expect(HomeTitle).toBeInTheDocument()
  });

  test("must be Home__title in title", () => {
    render(<Home />)
    const HomeTitle = screen.getByText("0")
    expect(HomeTitle).toHaveClass("Home__title")
  });

  test("should not start the title with classes Home__title--increment and Home__title--decrement", () => {
    render(<Home />)
    const HomeTitle = screen.getByText("0")
    expect(HomeTitle).not.toHaveClass("Home__title--increment")
    expect(HomeTitle).not.toHaveClass("Home__title--decrement")
  });

  test("must contain an increment button", () => {
    render(<Home />);
    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(buttonIncrement).toBeInTheDocument();
  });  

  test("must contain an decrement button", () => {
    render(<Home />);
    const buttonIncrement = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(buttonIncrement).toBeInTheDocument();
  });

  

});
