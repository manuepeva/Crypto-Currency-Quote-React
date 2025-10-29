import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import ErrorMessage from "./ErrorStyles";

const Error = ({ mensaje }) => {
  return <ErrorMessage>{mensaje}</ErrorMessage>;
};

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default Error;
