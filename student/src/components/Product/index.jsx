import React from "react";
import { Container, Col, Img, Wrapper } from "./style";
import chat from "../../assets/png/message.png";
import protect from "../../assets/png/protect.png";
import table from "../../assets/png/chair.png";
import girlface from "../../assets/png/girlface.png";

export default function Product() {
  return (
    <Wrapper>
      <Col.Title>HR Production of the Highest Quality</Col.Title>
      <Container>
        <Col>
          <Img src={chat} />
          <Col.Text>Educates & Informs <br></br> Employee Expectations</Col.Text>
        </Col>
        <Col>
          <Img src={protect} />
          <Col.Text>Protects Your Business <br></br> Just in Case</Col.Text>
        </Col>
        <Col>
          <Img src={table} />
          <Col.Text>Manages & Stores <br></br> Important Documents</Col.Text>
        </Col>
        <Col>
          <Img src={girlface} />
          <Col.Text>Create a Healthy <br></br> Work Environment</Col.Text>
        </Col>
      </Container>
    </Wrapper>
  );
}
