import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

export const Section = styled.section`
  background-color: #eee;
  border-top: solid 2px palevioletred;
  padding: 20px 25px;
  width: 500px;
  box-shadow: 0px 2px 3px rgb(0, 0, 0, 0.3);
`;

export const CustomButton = styled.button`
  background: palevioletred;
  color: white;
  font-size: 1em;
  padding: 1em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

export const Balance = styled.span`
  font-size: 36px;
  margin-top: 12px;
  display: inline-block;
  color: black;
`;
