/* eslint-disable prettier/prettier */
import { IStatus } from "interfaces";
import styled, { css } from "styled-components/macro";

export const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background: #f4f4f4;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;
`;

export const Header = styled(Item)`
  font-weight: 700;
`;

export const Status = styled.div<{ status?: IStatus }>`
  background-color: #333;
  color: #fff;
  width: 100px;
  padding: 0 20px;
  justify-self: center;
  border-radius: 10px;
  font-size: 16px;
  text-align: center;

  ${({ status }) => status === 'new' && css`background-color: green;`}
  ${({ status }) => status === 'open' && css`background-color: steelblue;`}
  ${({ status }) => status === 'closed' && css`background-color: darkred;`}
`;

// Card
export const Card = styled.div`
  position: relative;
  text-align: left;
`;

export const TitleStatus = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.div`
  margin: 20px 0;
  font-size: 17px;
  background-color: #f4f4f4;
  border: 1px #ccc solid;
  padding: 0 10px 10px;
  border-radius: 5px;
`;

export const SubTitle = styled.h3`
  margin: 10px 0;
`;
