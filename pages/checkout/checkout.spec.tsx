import { render, screen, waitFor } from "@testing-library/react";
import Checkout from "./[id].page";
import comic from "dh-marvel/test/mocks/comic.json"







describe("Checkout", () => {
    describe("when rendering default", () => {
        it("should render the title and price",
            async () => {
                render(

                    <Checkout data={comic} />

                );

                const title = screen.getByText(/Marvel Previews/i);
                const price = screen.getByText(/15/i);


                await waitFor(() => {
                    expect(title).toBeInTheDocument()
                });
                await waitFor(() => {
                    expect(price).toBeInTheDocument()
                });



            });
    });
});
