import styled from "styled-components";
export const Wrapper = styled.div`
  margin-top: 120px;
  background-color: #f2efe6;
  padding-top: 114px;
  height: 602px;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;
export const Col = styled.div``;
Col.Title = styled.h1`
  font-family: "Recoleta";
  font-style: normal;
  font-weight: 600;
  font-size: 47px;
  line-height: 54px;
  text-align: center;
  color: #163a24;
  margin: 0;
`;
Col.Text = styled.h1`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #163a24;
  margin: 0;
  padding-top: 26px;
`;
export const Img = styled.img``;

export const Card = styled.div``;
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
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #163a24;
  margin: 0;
  width: 260px;
`;

Card.Img = styled.img`
  margin-left: 30px;
`;
Card.Time = styled.h1`
  font-family: "Recoleta";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  text-align: center;
  color: #163a24;
  margin: 0;
  padding-top: 13px;
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -40px;
`;

Button.Btn = styled.button`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #fbfaf7;
  border-radius: 160px;
  height: 52px;
  width: 244px;
  background-color: #198c36;
  border: 0;
`;
