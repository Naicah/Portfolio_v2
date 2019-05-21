import styled from "styled-components";

export const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-dark-1);
  height: 4em;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 100;
  /* padding: 0 1em; */

  #logoContainer {
    height: 100%;
    width: 5.5em;
    margin-left: 1.5em;
    #logo {
      height: 100%;
      background-size: 100%;
    }
  }

  .navLink {
    display: flex;
    text-decoration: none;
    color: var(--color-light-1);
    padding: 1em;
  }

  .navLink:hover,
  .active {
    cursor: pointer;
    transform: scale(1.05);
    border-bottom: 2px solid var(--color-accent);
    color: var(--color-accent);
  }

  @media only screen and (min-width: 768px) {
    .bm-overlay {
      display: none !important;
    }
    .bm-menu-wrap {
      margin-right: 6em;
      position: static !important;
      width: 80vw !important;
      transition: none !important;
      transform: none !important;
    }

    /* General sidebar styles */
    .bm-menu {
      padding: 0;
      font-size: 1.15em;
    }

    .bm-item-list {
      display: flex !important;
      flex-flow: row wrap !important;
      justify-content: space-evenly !important;
    }
    .bm-item {
      transition: none !important;
      transform: none !important;

      :hover,
      .active {
        cursor: pointer;
        transform: scale(1.05);
        border-bottom: 2px solid var(--color-accent);
        color: var(--color-accent);
      }
    }
  }

  /* ================== ANIMATED MENU ======================= */
  @media only screen and (max-width: 768px) {
    /* Position and sizing of burger button */
    .bm-burger-button {
      position: fixed;
      width: 2em;
      height: 2em;
      right: 2em;
      top: 1em;
    }

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
      background: var(--color-light-1);
    }

    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
      background: var(--color-accent);
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
      height: 1em;
      width: 1em;
    }

    /* Color/shape of close button cross */
    .bm-cross {
      background: var(--color-light-1);
    }

    /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/

    .bm-menu-wrap {
      position: fixed;
      height: 100%;
    }

    /* General sidebar styles */
    .bm-menu {
      background: var(--color-dark-1);
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;
    }

    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
      fill: #373a47;
    }

    /* Wrapper for item list */

    .bm-item-list {
      color: #b8b7ad;
      padding: 0.8em;
    }

    /* Individual item */
    .bm-item {
      display: inline-block;
      :focus {
        outline: none;
      }
    }

    /* Styling of overlay */
    .bm-overlay {
      transition: opacity 0.3s ease 0s;
      top: 0;
      left: 0;
    }
  }
`;
