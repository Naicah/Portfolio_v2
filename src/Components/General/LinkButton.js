import styled from "styled-components";

export const LinkButton = styled.a`
  background-color: var(--color-accent);
  color: var(--color--bg);
  padding: 1rem;
  font-size: var(--font-size-m);

  font-family: var(--font-stack-normal);
  border: 3px solid var(--color-accent);

  :hover {
    cursor: pointer;
    background-color: var(--color-dark-2);
  }
`;

export default LinkButton;
