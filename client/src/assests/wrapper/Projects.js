import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  margin-left: 15rem;
  height: 100%;
  min-height: 100vh;
  width: calc(100vw - 15rem);
  background: var(--clr-primary-6);
  .project-container {
    display: grid;
    justify-content: center;
    align-items: center;
    justify-self: center;
    grid-template-columns: 7rem 1fr 7rem;
  }
  .project {
    display: grid;
    justify-content: center;
    grid-template-rows: 1fr 3rem 2rem 2rem 5rem;
    background: white;
    height: 45rem;
    width: 60rem;
    border-radius: 0.5rem;
    box-shadow: var(--dark-shadow);
  }
  .project:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  }
  .img-container {
    display: grid;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-bottom: 2px solid black;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }
  .img {
    width: 62rem;
    height: 100%;
    border-radius: 0.5rem;
  }
  .btn {
    justify-content: center;
    border: none;
    background: none;
    font-size: 3rem;
    cursor: pointer;
  }
  .right {
    padding-top: 0.5rem;
  }
  .info {
    display: grid;

    justify-self: center;
  }
  .code-btn {
    background: var(--clr-primary-5);
    color: white;
    height: 3rem;
    display: grid;
    place-items: center;
    width: 7rem;
  }

  .demo-btn {
    background: var(--clr-primary-5);
    color: white;
    height: 3rem;
    display: grid;
    place-items: center;
    width: 7rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }

  @media screen and (max-width: 900px) {
    margin-left: 2rem;
    width: calc(100vw - 2rem);
  }
  @media screen and (max-width: 1500px) {
    .project-big {
      display: none;
    }
    .project-container {
      grid-template-columns: 4rem 1fr 4rem;
    }
  }
`;

export default Wrapper;
