import styled from "styled-components";

export const ContactDiv = styled.div`
  .contactForm {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    width: 60vw;
    margin: 4em auto;
  }
  .input {
    display: flex;
    flex-flow: column wrap;
    min-height: 5em;
  }

  /* =========================== YOKO ================================= */
  /* https://tympanus.net/Development/TextInputEffects/index.html */

  .input {
    position: relative;
    z-index: 1;
    display: inline-block;
    margin: 1em;
    max-width: 350px;
    width: calc(100% - 2em);
    vertical-align: top;
  }

  .input__field {
    position: relative;
    display: block;
    float: right;
    padding: 0.8em;
    width: 60%;
    border: none;
    border-radius: 0;
    -webkit-appearance: none; /* for box shadows to show on iOS */
  }

  .input__field:focus {
    outline: none;
  }

  .input__label {
    display: inline-block;
    float: right;
    padding: 0 1em;
    width: 40%;
    font-size: 70.25%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .input__label-content {
    position: relative;
    display: block;
    padding: 1.6em 0;
    width: 100%;
  }

  .input__field--yoko {
    z-index: 10;
    width: 100%;
    background: transparent;
    color: var(--color-dark-2);
    opacity: 0;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
  }

  .input__label--yoko {
    position: relative;
    width: 100%;
    color: var(--color-dark-2);
    text-align: left;
  }

  .input__label--yoko::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 100%;
    height: 4em;
    background: var(--color-light-2);
    -webkit-transform: perspective(1000px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(1000px) rotate3d(1, 0, 0, 90deg);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
  }

  .input__label--yoko::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.25em;
    background: var(--color-light-2);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
  }

  .input__label-content--yoko {
    padding: 0.75em 0;
  }

  .input__field--yoko:focus,
  .input--filled .input__field--yoko {
    opacity: 1;
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }

  .input__field--yoko:focus + .input__label--yoko::before,
  .input--filled .input__label--yoko::before {
    -webkit-transform: perspective(1000px) rotate3d(1, 0, 0, 0deg);
    transform: perspective(1000px) rotate3d(1, 0, 0, 0deg);
  }

  .input__field--yoko:focus + .input__label--yoko,
  .input--filled .input__label--yoko {
    pointer-events: none;
  }

  .input__field--yoko:focus + .input__label--yoko::after,
  .input--filled .input__label--yoko::after {
    -webkit-transform: perspective(1000px) rotate3d(1, 0, 0, -90deg);
    transform: perspective(1000px) rotate3d(1, 0, 0, -90deg);
  }

  @media only screen and (min-width: 768px) {
    .contactForm {
      height: 50vh;
      margin: 2em auto;
      justify-content: space-between;
    }

    .input {
      max-width: 300px;
      align-self: center;
    }

    #sendContactForm {
      align-self: flex-end;
      width: 10vw;
      margin-right: 3em;
    }
  }
`;
