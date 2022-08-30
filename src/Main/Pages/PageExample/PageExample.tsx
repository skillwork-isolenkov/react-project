import * as React from "react";
import { GiCrownedSkull } from 'react-icons/gi';

import ComponentExample from "../../Components/ComponentExample/ComponentExample";
import './page-example.scss';

const PageExample: React.FC = () => {
  return (
      <div className="page-example">
        <h1>Page Example <GiCrownedSkull /></h1>

        <ComponentExample headerText="Submitted Header Text" buttonText="Submitted Button Text" />
      </div>
  )
}

export default PageExample;