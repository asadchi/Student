import React from "react";
import { Container, Col } from "./style";
import fit from '../../assets/png/Fit.png'

export default function Fit() {
  return (
    <Container>
    <Col>
      <Col.Title>How the scenes fit together.</Col.Title>
      <Col.Text>Employee Training & Development, Diversity & Inclusion Programs, and Conflict Resolution.</Col.Text>
    </Col>
    <Col><Col.Img src={fit} /></Col>
    </Container>
  );
}
