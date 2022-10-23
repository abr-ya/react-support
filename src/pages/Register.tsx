import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { register, clearUser } from "../features/auth/authSlice";
import { Loader, UserForm } from "components";
import { BtnBlock, Container, PageHeader, SectionComment } from "components/Common.styled";
import { INewUser } from "interfaces";
import { useAppDispatch, useAppSelector } from "features/typedRedux";

const Register = () => {
  const { user, isLoading, isError, isSuccess, error } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isError);
    if (isError) toast.error(error);

    // Redirect when logged in
    if (isSuccess) navigate("/");
  }, [isError, isSuccess, user, error, navigate, dispatch]);

  const formHandler = (userData: INewUser) => {
    console.log("Register", userData);
    dispatch(register(userData));
  };

  const Logout = () => {
    localStorage.removeItem("user");
    dispatch(clearUser());
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
        <SectionComment>Please create an account</SectionComment>
        <UserForm formHandler={formHandler} buttonTitle="Register" showName />
        {/* <GreenLink to="/sign-in">Sign In Instead</GreenLink> */}
      </>
    );
  };

  return (
    <Container>
      <PageHeader>Register</PageHeader>
      {renderMain()}
    </Container>
  );
};

export default Register;
