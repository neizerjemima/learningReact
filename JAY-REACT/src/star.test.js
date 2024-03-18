import { render } from "@testing-library/react";
import { Star } from "./star.js"
test("renders an h1", () => {
    const { getByText } = render(<Star />);
    const h1 = getByText(/Jay Star/);
    expect(h1).toHaveTextContent("Jay Star");
});