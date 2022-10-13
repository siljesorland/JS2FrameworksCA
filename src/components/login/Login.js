import Heading from "../../components/Heading";
import React from "react";
import { Container } from "react-bootstrap";
import LoginForm from "../../components/login/LoginForm";

export default function Login() {
    return (
        <Container><div>
            <Heading title="Login" />
            <LoginForm></LoginForm>
        </div>
        </Container>
    );
}

