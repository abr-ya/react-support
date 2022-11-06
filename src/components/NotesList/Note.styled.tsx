import styled, { css } from "styled-components/macro";

export const Note = styled.div<{ staff?: boolean }>`
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  text-align: left;
  padding: 20px;
  margin-bottom: 20px;
  position: relative;

  ${({ staff }) =>
    staff
      ? css`
          background-color: rgba(0, 0, 0, 0.7);
          color: #fff;
        `
      : css`
          color: rgba(0, 0, 0, 0.7);
          background-color: #fff;
        `}
`;

export const DateText = styled.div<{ staff?: boolean }>`
  position: absolute;
  top: 15px;
  right: 10px;
  font-size: 14px;
`;

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;
