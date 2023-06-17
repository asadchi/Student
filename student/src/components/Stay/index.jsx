import React from "react";
import { Container, Col, Wrapper, Input } from "./style";
import ebook from "../../assets/png/ebook.png";

export default function Stay() {
  return (
    <Wrapper>
      <Container>
        <Col>
          <Col.Title>Stay up to date!</Col.Title>
          <Col.Text>
          Sign up for the latest Clerksy news.  
          </Col.Text>
        </Col>
        <Col>
        <Col.Button>Sign Up</Col.Button>
          <Input input type="text" />
          <Input.Text>By submitting your email you agree to receive updates about Clerksy. You can <br /> unsubscribe at any time. View our full <Input.Pr> <br /> Privacy Policy.</Input.Pr> </Input.Text>
        </Col>
      </Container>
    </Wrapper>
  );
}
