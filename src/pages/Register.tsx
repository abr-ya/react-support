import { UserForm } from "components";
import { Container, PageHeader } from "components/Common.styled";

const Register = () => {
  const formHandler = async ({ name, email, pass }) => {
    console.log("Register", name, email, pass);
  };

  return (
    <Container>
      <PageHeader>Sign Up</PageHeader>
      <UserForm formHandler={formHandler} buttonTitle="Sign Up" showName />
      {/*<GreenLink to="/sign-in">Sign In Instead</GreenLink>*/}
    </Container>
  );
};

export default Register;
