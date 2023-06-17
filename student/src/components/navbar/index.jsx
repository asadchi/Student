// import React from "react";
// import { Container,Box } from "./style";

// export default function Navbar() {
//   return (
//     <Container>
//       <Box width="100px" height="100px">
//         Small
//       </Box>
//       <Box width="200px" height="200px">
//         Meddum
//       </Box>
//       <Box width="300px" height="300px">
//         Large
//       </Box>
//     </Container>
//   );
// }

import React from "react";
import { Nav, Container, Logo, Menu } from "./style";
import logo from "../../assets/png/Frame.png";

export default function Navbar() {
  return (
    <Nav>
      <Container>
        <Logo src={logo} />
        <Menu>
          <Menu.Login href="#">Log In</Menu.Login>
          <Menu.Phone href="tel:844-332-6440">844-332-6440</Menu.Phone>
          <Menu.Button>Get Started</Menu.Button>
        </Menu>
      </Container>
    </Nav>
  );
}
