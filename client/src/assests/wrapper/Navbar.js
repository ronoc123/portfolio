import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  width: 15rem;
  height: 100vh;
  position: fixed;

  .navbar {
    height: 100vh;
    background: var(--clr-primary-4);
    display: grid;
    grid-template-columns: 1fr;
    transition: var(--transition);
    grid-template-rows: 5rem 15rem 1fr 5rem;
    row-gap: 1.5rem;
  }
  .links-container {
    display: grid;
    grid-template-columns: 1fr;
    transition: var(--transition);
  }

  .name-container {
    display: grid;
    margin-top: 1rem;
    justify-self: center;
    font-size: 1.5rem;
    border-bottom: 1px solid black;
  }

  .first-name {
    /* color: var(--clr-primary-5); */
    color: white;
    font-weight: 600;
  }
  .last-name {
    /* color: var(--clr-primary-5); */
    color: white;
    font-weight: 600;
  }
  .tiny-screen {
  }
  .underline {
    border-bottom: 1px solid black;
    margin: 1rem;
  }

  .link {
    display: grid;
    padding-left: 1rem;
    cursor: pointer;
    transition: var(--transition);
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
    align-items: center;
    /* align-self: center; */
  }
  .link:hover {
    padding-left: 1.3rem;
    background: var(--clr-primary-5);
  }
  .active {
    background: var(--clr-primary-5);
  }

  .tiny {
    display: none;
  }
  .big-screen {
    display: none;
  }
  .foot {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    margin-bottom: 2rem;
  }
  .logo {
    font-size: 2rem;
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    width: 5rem;
    .link {
      font-size: 0.8rem;
      padding-left: 0;
      justify-content: center;
    }
    .link:hover {
      padding-left: 0rem;
      background: var(--clr-primary-5);
    }
    .small-screen {
      display: none;
    }
    .big-screen {
      display: block;
    }
    .navbar {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
    .icon {
      font-size: 1.5rem;
      color: black;
      justify-self: center;
      align-self: flex-end;
    }
    .active {
      .icon {
        color: white;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .navbar {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      width: 2.5rem;
    }
    .tiny {
      display: block;
      display: grid;
      justify-content: center;
      margin-top: 2rem;
      cursor: pointer;
    }
    .tiny-screen {
      display: none;
    }
    .small-screen {
      display: none;
    }
    .big-screen {
      display: none;
    }
  }
`;

export default Wrapper;
