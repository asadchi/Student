import React from "react";
import { Container, Col } from "./style";
import hat from '../../assets/png/girl.png'
import ball from '../../assets/png/ball.png'

export default function Put() {
  return (
    <Container>
      <Col><Col.Img src={hat} /></Col>
      <Col>
      <Col.Title>Put the human back in HR.</Col.Title>
      <Col.Text>Your employees are the real stars. Show the love and help them perform!</Col.Text>
    </Col>
    <Col>
      <Col.Title>You don’t have to play all the parts.</Col.Title>
      <Col.Text>Sales, accounting, HR— Oh My! You can’t do it all - let Clerksy help.</Col.Text>
    </Col>
    <Col><Col.Img src={ball} /></Col>
    </Container>
  );
}
