import { fireEvent, render } from "@testing-library/react";
import { Checkbox } from "./checkbox.js";
test("selecting checkbox should change value to true", () => {
    const { getByLabelText } = render(<Checkbox />);
    const checkbox = getByLabelText(/not Checked/i);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
});