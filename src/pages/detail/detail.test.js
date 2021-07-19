import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Detail from ".";

describe("Detail Component", () => {

  test("must be zero valued", () => {
    render(<Detail />)
    const DetailTitle = screen.getByText("0")
    expect(DetailTitle).toBeInTheDocument()
  });

  test("must be Detail__title in title", () => {
    render(<Detail />)
    const DetailTitle = screen.getByText("0")
    expect(DetailTitle).toHaveClass("Detail__title")
  });

  test("should not start the title with classes Detail__title--increment and Detail__title--decrement", () => {
    render(<Detail />)
    const DetailTitle = screen.getByText("0")
    expect(DetailTitle).not.toHaveClass("Detail__title--increment")
    expect(DetailTitle).not.toHaveClass("Detail__title--decrement")
  });

  test("must contain an increment button", () => {
    render(<Detail />);
    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(buttonIncrement).toBeInTheDocument();
  });  

  test("must contain an decrement button", () => {
    render(<Detail />);
    const buttonIncrement = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(buttonIncrement).toBeInTheDocument();
  });

  

});
