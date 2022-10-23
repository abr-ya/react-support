import { Container, Card, AboutList, PageHeader } from "../components/Common.styled";

const About = () => (
  <Container>
    <PageHeader>About page</PageHeader>
    <Card>
      <p>Приложение - ...</p>

      <AboutList>
        В приложении использованы (основное):
        <li>React</li>
        <li>Webpack 5</li>
        <li>TypeScript</li>
        <li>стилизация: Styled Components</li>
        <li>маршрутизация: React Router 6</li>
        <li>авторизация: Express + Mongo DB</li>
        <li>запросы на сервер: Axios</li>
        <li>хранилище: Redux (with Toolkit)</li>
        <li>иконки: React Icons</li>
        <li>уведомления: React Toastify</li>
      </AboutList>
    </Card>
  </Container>
);

export default About;
