import { ReactElement } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { BtnLinkWhite, Container, PageHeader } from "components/Common.styled";

interface IContainerWithBack {
  children: ReactElement;
  title: string;
}

const ContainerWithBack = ({ children, title }: IContainerWithBack) => (
  <Container>
    <BtnLinkWhite to="/">
      <FaArrowCircleLeft /> Back
    </BtnLinkWhite>
    <PageHeader>{title}</PageHeader>
    {children}
  </Container>
);

export default ContainerWithBack;
