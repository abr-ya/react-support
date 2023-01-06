import styled from "styled-components/macro";

export const FormWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  text-align: left;
  display: block;
  margin: 0 0 5px 3px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  margin-bottom: 10px;
  font-family: inherit;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  margin-bottom: 10px;
  font-family: inherit;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  margin-bottom: 10px;
  font-family: inherit;
`;

export const Close = styled.button`
  background: none;
  border: none;
  color: #000;
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    color: red;
    transform: scale(0.95);
  }
`;
