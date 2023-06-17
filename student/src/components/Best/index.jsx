import React from "react";
import { Container, Col } from "./style";
import stripe from '../../assets/png/stripe.png'
import google from '../../assets/png/google.png'
import notion from '../../assets/png/notion.png'
import gusto from '../../assets/png/gusto.png'
import aircall from '../../assets/png/aircall.png'

export default function Best() {
  return (
    <>
      <Col.Title>We partner with the best</Col.Title>
    <Container>
      <Col><Col.Img src={stripe} /></Col>
      <Col><Col.Img src={google} /></Col>
      <Col><Col.Img src={notion} /></Col>
      <Col><Col.Img src={gusto} /></Col>
      <Col><Col.Img src={aircall} /></Col>
    </Container>
    </>
  );
}
