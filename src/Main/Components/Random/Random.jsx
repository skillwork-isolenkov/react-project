import './random.scss';

import { Button } from 'react-bootstrap';

const Random = () => {
  return (
      <div className="random">
        <h1 className="random__header">Random!</h1>
        <Button as="a" variant="secondary">React Secondary Button</Button>
      </div>
  )
}

export default Random;