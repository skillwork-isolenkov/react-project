import './_theming-page.scss';
import {Col, Container, Row, Form} from "react-bootstrap";
import React from "react";

const ThemingPage = () => {

  const colors = [
    'primary-lightest',
    'primary-light',
    'primary',
    'primary-dark',
    'primary-darkest',
    'secondary-light',
    'secondary',
    'secondary-dark',
    'danger-lightest',
    'danger-light',
    'danger',
    'danger-dark',
    'danger-darkest',
    'warning-lightest',
    'warning-light',
    'warning',
    'warning-dark',
    'warning-darkest',
    'info-lightest',
    'info-light',
    'info',
    'info-dark',
    'info-darkest',
    'success-lightest',
    'success-light',
    'success',
    'success-dark',
    'success-darkest',
    'indigo-lightest',
    'indigo-light',
    'indigo',
    'indigo-dark',
    'indigo-darkest',
    'purple-lightest',
    'purple-light',
    'purple',
    'purple-dark',
    'purple-darkest',
    'green-lightest',
    'green-light',
    'green',
    'green-dark',
    'green-darkest',
    'blue-lightest',
    'blue-light',
    'blue',
    'blue-dark',
    'blue-darkest',
    'light',
    'dark'
  ];

  return (
      <>
        <div className="theming-page">
          <h1 className="theming-page__title">Theming Page</h1>
          <h3 className="text-light d-flex justify-content-center mt-5">Theming Colors</h3>
          <Container className="my-5">
            <Row className="justify-content-center">
              {colors.map((color, index) => (
                  <Col key={index} xs={3} sm={3} md={2} lg={1} className="mb-3">
                    <div
                        className={`bg-${color} rounded p-3`}
                        style={{ height: '50px' }}
                    />
                    <div className="text-center text-light mt-2">{color}</div>
                  </Col>
              ))}
            </Row>
          </Container>

          <h3 className="text-light d-flex justify-content-center mt-5">Checkboxes</h3>
        </div>
        <div className="fill-background"/>
      </>
  )
}

export default ThemingPage;