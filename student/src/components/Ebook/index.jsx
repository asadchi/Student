import React from "react";
import { Container, Col } from "./style";
import ebook from "../../assets/png/ebook.png";

export default function Ebook() {
  return (
    <Container>
      <Col>
        <Col.Title>Not just another HR resource.</Col.Title>
        <Col.Text>Simple. Entertaining. Informative.</Col.Text>
        <Col.Button>Download E-book</Col.Button>
      </Col>
      <Col>
        <Col.Img src={ebook} />
      </Col>
    </Container>
  );
}
