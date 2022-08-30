import * as React from "react";
import { Button } from 'react-bootstrap';

import RandomProps from './RandomTypes';
import './random.scss';


const Random: React.FC<RandomProps> = ({headerText, buttonText}) => {
  return (
      <div className="random">
        <h1 className="random__header">{headerText || "Default Header Text"}</h1>
        <Button as="a" variant="secondary">{buttonText || "Default Button Text"}</Button>
      </div>
  )
}

export default Random;