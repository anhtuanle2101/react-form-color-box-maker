import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import BoxList from "./BoxList";

it("component does not crash", function(){
    render(<BoxList />)
})

it("snapshot test", function(){
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})