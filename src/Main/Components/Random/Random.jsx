import './random.scss';
import { Button } from 'react-bootstrap';

const Random = () => {
  return (
      <div className="random">
        <h1 className="random__header">Random!</h1>
        <div className="random__buttons-wrapper">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
  )
}

export default Random;