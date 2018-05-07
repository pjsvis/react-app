import * as React from 'react';
// import { Input, Label } from 'reactstrap';

// Ref: https://github.com/facebook/jest/blob/master/examples/typescript/CheckboxWithLabel.tsx
// TODO: Implement tests with jest
interface ICheckboxWithLabelProps {
    labelOff: string;
    labelOn: string;
}

interface ICheckboxWithLabelState {
    isChecked: boolean;
}

class CheckboxWithLabel extends React.Component<ICheckboxWithLabelProps, ICheckboxWithLabelState> {
    constructor(props: ICheckboxWithLabelProps) {
        super(props);
        this.state = { isChecked: false };
    }
    // TODO: implement checkbox state change with reactstrap component
    public render() {
        return (
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={this.state.isChecked}
                        // tslint:disable-next-line:jsx-no-lambda
                        onChange={() =>
                            this.setState(current => ({ isChecked: !current.isChecked }))
                        }
                    />
                    {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
                </label>
                {/* TODO: implement checkbox state */}
                {/* <div>
                    <Label check={false}>
                        <Input type="checkbox" /> Check me out
                    </Label>
                </div> */}
            </div>
        );
    }
}

export default CheckboxWithLabel;
