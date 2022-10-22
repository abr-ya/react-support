import { Container, PageHeader, SectionComment } from "components/Common.styled";
import { UserForm } from "components";

const Login = () => {
  const formHandler = async ({ email, pass }) => {
    console.log("Login", email, pass);
  };

  return (
    <Container>
      <PageHeader>Login</PageHeader>
      <SectionComment>Please log in to get support</SectionComment>
      <UserForm formHandler={formHandler} buttonTitle="Login" />
      {/*<GreenLink to="/sign-up">Sign Up Instead</GreenLink>*/}
    </Container>
  );
};

export default Login;
