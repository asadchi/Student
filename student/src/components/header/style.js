  import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 98px);
  background-color: #163a24;
  color: #fff;
  display: flex;
  align-items: end;
  height: 557px;
`;

export const Row = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  background-color: #163a24;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Col = styled.div``;

Col.Title = styled.h1`
  font-family: "Recoleta";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 65px;
  color: #fbfaf7;
  max-width: 391px;
`;
Col.Text = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;    
  color: #fbfaf7;
  max-width: 475px;
`;
Col.img = styled.img`
width: 738px;
height: 580px;
`