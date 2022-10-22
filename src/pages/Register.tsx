import { UserForm } from "components";
import { Container, PageHeader, SectionComment } from "components/Common.styled";

const Register = () => {
  const formHandler = async ({ name, email, pass }) => {
    console.log("Register", name, email, pass);
  };

  return (
    <Container>
      <PageHeader>Register</PageHeader>
      <SectionComment>Please create an account</SectionComment>
      <UserForm formHandler={formHandler} buttonTitle="Register" showName />
      {/*<GreenLink to="/sign-in">Sign In Instead</GreenLink>*/}
    </Container>
  );
};

export default Register;
