import * as React from "react";
import {Button} from 'react-bootstrap';

import ComponentExampleProps from './ComponentExampleTypes';
import './component-example.scss';

const ComponentExample: React.FC<ComponentExampleProps> = ({headerText, buttonText, buttonHandler}) => {
    return (
        <div className="component-example">
            <h1 className="component-example__header">
                {headerText || "Default Header Text"}
            </h1>
            <Button as="a" variant="secondary" onClick={buttonHandler}>
                {buttonText || "Default Button Text"}
            </Button>
        </div>
    )
}

export default ComponentExample;