import React from "react";
import { Nav, Container, Logo, Menu, Center, Line, Li } from "./style";
import clerksy from "../../assets/png/cherksy.png";
import facebook from "../../assets/png/facebook.png";
import twitter from "../../assets/png/twitter.png";
import inliked from "../../assets/png/in.png";
import instagram from "../../assets/png/instagram.png";

export default function Navbar() {
  return (
    <>
      <Nav>
        <Container>
          <Logo src={clerksy} />
          <Center>A people company.</Center>
          <Menu>
            <Menu.Button />
            <Logo src={facebook} />
            <Logo src={twitter} />
            <Logo src={inliked} />
            <Logo src={instagram} />
          </Menu>
        </Container>
      </Nav>
      <Li>
        <Line></Line>
      </Li>
      <Nav>
      <Container>
        <Line.Text>
          © 2020 Clerksy, Inc. Clerksy is a registered trademark of Clerksy,
          Inc.
        </Line.Text>
        <Li.T>
          <Line.Title>Privacy Policy</Line.Title>
          <Line.Title>Terms of Service</Line.Title>
          <Line.Title>GDPR</Line.Title>
          <Line.Title>Careers</Line.Title>
          <Line.Title>Press Kit</Line.Title>
        </Li.T>
      </Container></Nav>
    </>
  );
}
