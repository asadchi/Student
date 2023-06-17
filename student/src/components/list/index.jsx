import React from "react";
import { Container, Col, Img, Wrapper, Button } from "./style";
import listleft from "../../assets/png/listleft.png";
import listright from "../../assets/png/listright.png";

export default function List() {
  return (
    <Wrapper>
      <Col.Title>Get Started With Clerksy</Col.Title>
      <Col.Text>Make sure your business puts people first.</Col.Text>

      <Button>
        <Button.Btn>Book Free Discovery Call</Button.Btn>
      </Button>
      <Container>
        <Img src={listleft} />
        <Img src={listright} />
      </Container>
    </Wrapper>
  );
}
