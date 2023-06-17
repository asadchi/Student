import React from "react";
import { Container, Col, Img, Wrapper, Card, Button } from "./style";
import righttop from "../../assets/png/righttop.png";
import rightdown from "../../assets/png/rightdown.png";
import circle from "../../assets/png/ci.png";

export default function Usd() {
  return (
    <Wrapper>
      <Col.Title>It's easy as 1, 2, 3</Col.Title>
      <Col.Text>
        Clerksy can help use your unique business needs. Here's how:.
      </Col.Text>
      <Container>
        <Card>
          <Card.Text>
            Fill out a form and tell us what <br /> you're looking for:
          </Card.Text>
          <Card.Time>5 minutes</Card.Time>
        </Card>
        <Card>
          <Img src={righttop} />
        </Card>
        <Card>
          <Card.Text>
            Time it will take a Clerksy rep <br /> to follow up:
          </Card.Text>
          <Card.Time>24 hours</Card.Time>
        </Card>
        <Card>
          <Img src={rightdown} />
        </Card>
        <Card>
          <Card.Img src={circle} />
        </Card>
        <Button>
          <Button.Btn>Book Free Discovery Call</Button.Btn>
        </Button>
      </Container>
    </Wrapper>
  );
}
