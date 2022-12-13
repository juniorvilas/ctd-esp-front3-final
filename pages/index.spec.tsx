import { render, screen, waitFor } from "@testing-library/react";
import IndexPage from "dh-marvel/pages/index.page";
import Index from "dh-marvel/pages/index.page";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();



describe("IndexPage", () => {
  describe("when rendering default", () => {
    it("should render the title",
      async () => {
        render(
          <QueryClientProvider client={queryClient}>
            <Index />
          </QueryClientProvider>
        );

        const title = screen.getByText(/Seja bem vindo ao DH Marvel/i);


        await waitFor(() => {
          expect(title).toBeInTheDocument()
        });



      });
  });
});
