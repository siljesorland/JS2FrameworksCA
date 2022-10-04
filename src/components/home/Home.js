import React from "react";
import Heading from "../../components/Heading";
import Characters from "../../components/characters/Characters";
import { Container } from "react-bootstrap";
import Paragraph from "../../components/Paragraph";



function Home() {

  return (
    <Container><div className="homepage">
      <h1>Hello</h1>
      <Heading title="Game of Thrones" />
      <Paragraph>Characters From the hit tv show</Paragraph>
      <div className="container">Environment: {process.env.NODE_ENV}</div>
      <Characters />
    </div>
    </Container>
  );
}

export default Home;