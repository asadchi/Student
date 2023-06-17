import React from "react";
import { Container, Col, Img, Wrapper, Card } from "./style";
import miniprotect from "../../assets/png/miniprotect.png";
import ministar from "../../assets/png/ministar.png";
import search from "../../assets/png/search.png";
import tochka from "../../assets/png/tochka.png";

export default function Consider() {
  return (
    <Wrapper>
      <Col.Title>Consider everyone's best interest</Col.Title>
      <Col.Text>HR is for everyone. Clerksy can help you.</Col.Text>
      <Container>
        <Card>
          <Col>
            <Img src={miniprotect} />
            <Card.Title>
              Protect Your <br /> Company
            </Card.Title>
            <Card.Text>
              <Card.Img src={tochka} />
              Compliance Audits & Training
            </Card.Text>
            <Card.Text>
              <Card.Img src={tochka} />
              Employee Data Storage
            </Card.Text>
            <Card.Text>
              <Card.Img src={tochka} />
              Policy Drafting
            </Card.Text>
          </Col>
        </Card>
        <Card>
          <Col>
            <Img src={ministar} />
            <Card.Title>
              Set Your Employees <br /> Up For Success
            </Card.Title>
            <Card.Text>
              <Card.Img src={tochka} />
              Learning & Development
            </Card.Text>
            <Card.Text>
              <Card.Img src={tochka} />
              Employee Relations
            </Card.Text>
            <Card.Text>
              <Card.Img src={tochka} />
              Benefit Management
            </Card.Text>
            <Card.Text>
              <Card.Img src={tochka} />
              Employee Performance
            </Card.Text>
          </Col>
        </Card>
        <Card>
          <Col>
            <Img src={search} />
            <Card.Title>Know Your Industry's Legal Landscape</Card.Title>
            <Card.Text>
              <Card.Img src={tochka} />
              Work Place Investigations
            </Card.Text>
            <Card.Text>
              <Card.Img src={tochka} />
              Employee Mediations
            </Card.Text>
            <Card.Text>
              <Card.Img src={tochka} />
              Performance Tracking
            </Card.Text>
          </Col>
        </Card>
      </Container>
    </Wrapper>
  );
}
