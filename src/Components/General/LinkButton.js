import React from "react";
import styled from "styled-components";

export const LinkButtonDiv = styled.div`
  background-color: var(--color-accent);

  padding: 0.5em;

  border: 3px solid var(--color-accent);

  text-align: center;

  a {
    color: var(--color--bg);
    text-decoration: none;
    font-size: var(--font-size-m);
    font-family: var(--font-stack-normal);
  }

  :hover {
    cursor: pointer;
    background-color: var(--color-dark-2);
  }
`;

function LinkButton({ url, text, id }) {
  return (
    <LinkButtonDiv id={id}>
      <a href={url}>{text}</a>
    </LinkButtonDiv>
  );
}

export default LinkButton;
