import React, { useState } from 'react';
import { GiCrownedSkull } from 'react-icons/gi';

import ComponentExample from "../../Components/ComponentExample/ComponentExample";
import './page-example.scss';

const PageExample: React.FC = () => {
    const [headerText, setHeaderText] = useState('');
    const [buttonText, setButtonText] = useState('');

    const handleClick = () => {
        setHeaderText('Changed Header Text with State')
        setButtonText('Changed Button Text with State');
    }

  return (
      <div className="page-example">
        <h1>Page Example <GiCrownedSkull /></h1>

        <ComponentExample headerText={headerText} buttonText={buttonText} buttonHandler={handleClick}/>
      </div>
  )
}

export default PageExample;