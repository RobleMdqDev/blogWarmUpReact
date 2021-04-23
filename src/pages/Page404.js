import { Container } from "react-bootstrap";
import Hero from "../assets/img/404-page-not-found.jpg";

const Page404 = () => {
  return (
    <Container>
      <img src={Hero} alt='Hero 404' style={{ width: "50%" }} />
    </Container>
  );
};

export default Page404;
