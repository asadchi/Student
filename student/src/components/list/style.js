import styled from "styled-components";
export const Wrapper = styled.div`
  margin-top: 120px;
  background-color: #163a24;
  padding-top: 114px;
  height: 415px;
`;
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Col = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
Col.Title = styled.h1`
  font-family: "Recoleta";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 54px;
  text-align: center;
  color: #fbfaf7;
  margin: 0;
`;
Col.Text = styled.h1`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #fbfaf7;
  padding-top: 26px;
  margin: 0;
`;
export const Img = styled.img`
margin-top: -269px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

Button.Btn = styled.button`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #163a24;
  background-color: #fab5a0;
  border: 0;
  height: 52px;
  width: 258px;
  border-radius: 160px;
  margin-top: 8px;
`;
