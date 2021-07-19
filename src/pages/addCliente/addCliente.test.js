import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import addCliente from ".";

describe("addCliente Component", () => {

  test("must be zero valued", () => {
    render(<addCliente />)
    const addClienteTitle = screen.getByText("0")
    expect(addClienteTitle).toBeInTheDocument()
  });

  test("must be addCliente__title in title", () => {
    render(<addCliente />)
    const addClienteTitle = screen.getByText("0")
    expect(addClienteTitle).toHaveClass("addCliente__title")
  });

  test("should not start the title with classes addCliente__title--increment and addCliente__title--decrement", () => {
    render(<addCliente />)
    const addClienteTitle = screen.getByText("0")
    expect(addClienteTitle).not.toHaveClass("addCliente__title--increment")
    expect(addClienteTitle).not.toHaveClass("addCliente__title--decrement")
  });

  test("must contain an increment button", () => {
    render(<addCliente />);
    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(buttonIncrement).toBeInTheDocument();
  });  

  test("must contain an decrement button", () => {
    render(<addCliente />);
    const buttonIncrement = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(buttonIncrement).toBeInTheDocument();
  });

  

});
