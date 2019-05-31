import React from "react";
import styled from "styled-components";

export const LinkButtonDiv = styled.div`
  background-color: var(--color-accent);
  padding: 0.5em;
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

function LinkButton({ url, text, id, target }) {
  return (
    <LinkButtonDiv id={id}>
      <a href={url} target={target}>
        {text}
      </a>
    </LinkButtonDiv>
  );
}

export default LinkButton;
