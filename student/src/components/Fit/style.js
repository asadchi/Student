import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 130px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const Col = styled.div`
width: 50%;
`
Col.Img = styled.img`

`;
Col.Title = styled.h1`
  font-family: "Recoleta";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 54px;
  color: #163a24;
  max-width: 376px;
`;
Col.Text = styled.h1`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #163a24;
  padding-top: 27px;
  max-width: 379px;
`;
