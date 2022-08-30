import * as React from "react";

import Random from "../../Components/Random/Random";
import './page-example.scss';

const PageExample: React.FC = () => {
  return (
      <div className="page-example">
        Page Example

        <Random headerText="Submitted Header Text" buttonText="Submitted Button Text" />
      </div>
  )
}

export default PageExample;