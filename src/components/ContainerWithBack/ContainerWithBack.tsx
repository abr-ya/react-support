import { ReactElement } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { BtnBlockWhite, Container, PageHeader } from "components/Common.styled";
import { useNavigate } from "react-router-dom";

interface IContainerWithBack {
  children: ReactElement;
  title: string;
}

const ContainerWithBack = ({ children, title }: IContainerWithBack) => {
  const navigate = useNavigate();

  return (
    <Container>
      <BtnBlockWhite onClick={() => navigate(-1)}>
        <FaArrowCircleLeft /> Back
      </BtnBlockWhite>
      <PageHeader>{title}</PageHeader>
      {children}
    </Container>
  );
};

export default ContainerWithBack;
