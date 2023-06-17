import React from "react";
import { Container, Col, Img, Wrapper } from "./style";
import size from "../../assets/png/Size.png";

export default function Size() {
  return (
    <Wrapper>
      <Col.Title>Employees come in all shapes and <br /> sizes. Find the right fit.</Col.Title>
      <Col.Text>Focus on casting and screening. Let Clerksy handle contracts, resolve any on set-conflicts <br></br> and make sure you are compliant with work and safety boards.</Col.Text>
      <Container>
        <Col>
          <Img src={size} />
        </Col>
      </Container>
    </Wrapper>
  );
}
