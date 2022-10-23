import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BtnBlock, Container, PageHeader, SectionComment } from "components/Common.styled";
import { Loader, UserForm } from "components";
import { useAppDispatch, useAppSelector } from "features/typedRedux";
import { login, logout } from "features/auth/authSlice";

const Login = () => {
  const { user, isLoading, isError, isSuccess, error } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) toast.error(error);

    // Redirect when logged in
    if (isSuccess) navigate("/");
  }, [isError, isSuccess]);

  const formHandler = async ({ email, password }) => {
    console.log("Login", { email, password });
    dispatch(login({ email, password }));
  };

  const Logout = () => {
    dispatch(logout());
  };

  const renderMain = () => {
    if (isLoading) return <Loader />;

    if (isError)
      return (
        <>
          Произошла ошибка: {error}
          <BtnBlock onClick={Logout}>Вернуться к форме</BtnBlock>
        </>
      );

    if (user)
      return (
        <>
          Авторизован пользователь: {user.name}
          <BtnBlock onClick={Logout}>Сбросить и вернуться к форме</BtnBlock>
        </>
      );

    return (
      <>
        <SectionComment>Please log in to get support</SectionComment>
        <UserForm formHandler={formHandler} buttonTitle="Login" />
        {/*<GreenLink to="/sign-up">Sign Up Instead</GreenLink>*/}
      </>
    );
  };

  return (
    <Container>
      <PageHeader>Login</PageHeader>
      {renderMain()}
    </Container>
  );
};

export default Login;
