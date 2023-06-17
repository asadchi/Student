import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f2efe6;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 240px;
`;
export const Col = styled.div`
  width: 50%;
`;
Col.Img = styled.img``;
Col.Title = styled.h1`
  font-family: "Recoleta";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 54px;
  color: #163a24;
  margin: 0;
`;
Col.Text = styled.h1`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #163a24;
  margin: 0;
  padding-top: 26px;
`;
Col.Button = styled.button`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #fbfaf7;
  background-color: #15762e;
  border-radius: 160px;
  height: 54px;
  width: 111px;
  border: 0;
  margin-left: 480px;
  position: relative;
  top: 54px;
`;
export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #f2efe6;
  border-radius: 255px;
  height: 54px;
  width: 553px;
  border: 0;
  padding-left: 20px;
  margin-top: 60;
  outline: none;
`;
Input.Text = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #163a24;
  margin-top: 11px;
  display: flex;
`;
Input.Pr = styled.p`
  color: #198c36;
  margin-left: -250px;
  cursor: pointer;
`;
