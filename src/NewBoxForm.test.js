import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import NewBoxForm from "./NewBoxForm";

it("component does not crash", function(){
    render(<NewBoxForm />)
})

it("snapshot test", function(){
    const {asFragment} = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
})