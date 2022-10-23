import { BtnBlock } from "components/Common.styled";
import { useState, FormEvent } from "react";
import { ButtonBlock, InputBlock, StyledInput, StyledLabel } from "./UserForm.styled";

interface IUserFormData {
  name?: string;
  email: string;
  password: string;
}

interface IUserForm {
  formHandler: (data: IUserFormData) => void;
  buttonTitle: string;
  showName?: boolean;
}

const UserForm = ({ formHandler, buttonTitle, showName }: IUserForm): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    formHandler({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      {showName && (
        <InputBlock>
          <StyledLabel>Name</StyledLabel>
          <StyledInput onChange={(e) => setName(e.target.value)} type="text" icon="badgeIcon" />
        </InputBlock>
      )}
      <InputBlock>
        <StyledLabel>Email Address</StyledLabel>
        <StyledInput onChange={(e) => setEmail(e.target.value)} type="email" icon="personIcon" />
      </InputBlock>
      <InputBlock>
        <StyledLabel>Password</StyledLabel>
        <StyledInput onChange={(e) => setPass(e.target.value)} type="password" icon="lockIcon" />
      </InputBlock>
      <ButtonBlock>
        <BtnBlock>{buttonTitle}</BtnBlock>
      </ButtonBlock>
    </form>
  );
};

export default UserForm;
