import styled from "styled-components";

export const Nav = styled.div`
  color: #fff;
  height: 97px;
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
cursor: pointer;`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
Menu.Button = styled.img``;

export const Center = styled.h1`
  font-family: "Recoleta";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #163a24;
  margin-top: 15px;
`;

export const Line = styled.div`
  height: 1px;
  width: 1180px;
  background-color: #f2efe6; 
  margin-top: 15px;
`;
export const Li = styled.div`
  display: flex;
  justify-content: center;
`;
Line.Text = styled.h1`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #163a24;
`;
Line.Title = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: right;
  color: #198c36;
  cursor: pointer;
`;
Li.T = styled.div`
display: flex;
align-items: center;
gap: 14px;
`