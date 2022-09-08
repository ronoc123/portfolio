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
    grid-template-rows: 5rem 15rem 1fr;
  }
  .links-container {
    display: grid;
    grid-template-columns: 1fr;
  }

  .name-container {
    display: grid;
    margin-top: 1rem;
    justify-self: center;
    font-size: 1.5rem;
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
`;

export default Wrapper;
