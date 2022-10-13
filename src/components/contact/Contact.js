import React from "react";
import Heading from "../Heading";
import App from "../../components/ContactForm";

import { Container } from "react-bootstrap";



function Contact() {

    return (
        <Container><div>
            <Heading title="Contact Page" />
<App />
        </div>
        </Container>
    );
}

export default Contact;