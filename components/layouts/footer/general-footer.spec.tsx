import { render, screen } from "@testing-library/react";
import GeneralFooter from "dh-marvel/components/layouts/footer/general-footer.component";

describe("GeneralFooter", () => {
  describe("when rendering default layout", () => {
    it("should render the powered by text", () => {
      render(<GeneralFooter />);
      const poweredBy = screen.getByText(/Powered by/i);
      expect(poweredBy).toBeInTheDocument();
    });
    it("should render the logo", () => {
      render(<GeneralFooter />);
      const logo = screen.getByText(/Carlindo Junior/i);
      expect(logo).toBeInTheDocument();
    });
  });
});
