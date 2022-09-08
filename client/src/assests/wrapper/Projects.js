import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  margin-left: 15rem;
  height: 100vh;
  width: calc(100vw - 15rem);
  background: var(--clr-primary-6);
  .project-container {
    display: grid;
    justify-content: center;
    align-items: center;
    justify-self: center;
    grid-template-columns: 1fr;
    gap: 5rem;
    width: 60vw;
  }
  .project {
    text-align: center;
    background: white;
    height: 45rem;
    border-radius: 0.5rem;
    /* transition: var(--transition); */
    box-shadow: var(--dark-shadow);
  }
  .project:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
    /* border: 2px solid var(--clr-primary-6); */
  }
`;

export default Wrapper;
