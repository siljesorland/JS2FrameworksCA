import PropTypes from "prop-types";
import React from 'react'

export default function Heading({ title }) {
    return <h1>{title}</h1>;

}

Heading.propTypes = {
    title: PropTypes.string,
};