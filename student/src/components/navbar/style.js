// import styled from "styled-components";

// export const Container = styled.div`
//   max-width: 1240px;
//   padding: 0 20px;
//   margin: 0 auto;
// `;
// export const Box = styled.div`
//   border: 1px solid red;
//   width: ${({ width }) => width && width};
//   height: ${({ height }) => height && height};
//   display: inline-block;
//   margin-left: 20px;
// `;

import styled from "styled-components";

export const Nav = styled.div`
  background-color: #163a24;
  color: #fff;
  height: 98px;
  display: flex;
  align-items: center;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 153px;
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
`;
Menu.Login = styled.a`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  color: #fbfaf7;
  padding-right: 24px;
  text-decoration: none;
`;
Menu.Phone = styled.a`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  color: #fbfaf7;
  padding-right: 24px;
  text-decoration: none ;
`;
Menu.Button = styled.button`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  color: #fbfaf7;
  background: #198c36;
  border-radius: 160px;
  padding: 15px 25px;
  cursor: pointer;
  outline: none;
  border: 0;
`;
