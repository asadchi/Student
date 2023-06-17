import styled from "styled-components";
export const Wrapper = styled.div`
  margin-top: 118px;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 18px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;
`;
export const Col = styled.div``;
Col.Title = styled.h1`
  font-family: "Recoleta";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 54px;
  text-align: center;
  color: #163a24;
`;
Col.Text = styled.h1`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #163a24;
  padding-top: 26px;
`;
export const Img = styled.img``;

export const Card = styled.div`
  width: 33.33%;
  background-color: #fbfaf7;
  padding-top: 50px;
  padding-left: 40px;
  padding-bottom: 66px;
  width: 353px;
  box-shadow: 5px 5px 20px #e9e4d5;
  border-radius: 15px;
`;

Card.Title = styled.h1`
  font-family: "Recoleta";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  color: #163a24;
  padding-top: 20px;
  margin: 0;
`;
Card.Text = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #163a24;
  padding-top: 15px;
  margin: 0;
`;
Card.Img = styled.img`
  padding-right: 11px;
  padding-bottom: 2px;
`;
