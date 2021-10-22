import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Box from "./Box";

it("component does not crash", function(){
    render(<Box />)
})

it("snapshot test", function(){
    const {asFragment} = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
})