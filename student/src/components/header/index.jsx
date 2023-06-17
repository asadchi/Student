import React from "react";
import { Container, Col, Row } from "./style";
import img from "../../assets/png/hero.png";
export default function Header() {
  return (
    <Container>
      <Row>
        <Col>
          <Col.Title>Running the show has never been so easy.</Col.Title>
          <Col.Text>
            Ready to put the human back in HR? Clerksy helps you set the stage
            with an inclusive and compliant workplace.
          </Col.Text>
        </Col>
        <Row>
          <Col.img src={img} />
      </Row>
      </Row>
    </Container>
  );
}
