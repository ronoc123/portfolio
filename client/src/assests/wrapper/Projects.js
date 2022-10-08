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
    grid-template-rows: 1fr 3rem 3.5rem 3rem;
    background: white;
    height: 70%;
    max-height: 45rem;
    max-width: 60rem;
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
    align-items: flex-end;
  }
  .img {
    width: 62rem;
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
    font-size: 1rem;
    padding: 0.2rem;
    display: grid;
    place-items: center;
    width: 50%;
    height: 100%;
    border-radius: 0.2rem;
    justify-self: right;
    min-height: 1.5rem;
  }
  .hidden {
    display: hidden;
  }

  .demo-btn {
    background: var(--clr-primary-5);
    color: white;
    font-size: 1rem;
    width: 60%;
    height: 100%;
    min-height: 1.5rem;
    display: grid;
    justify-self: left;
    place-items: center;
    padding: 0.5rem;
    border-radius: 0.2rem;
  }
  .btn-container {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    column-gap: 2rem;
    padding-bottom: 1rem;
  }

  @media screen and (max-width: 900px) {
    margin-left: 5rem;
    width: calc(100vw - 5rem);
    .demo-btn {
      font-size: 0.5rem;
    }
    .code-btn {
      font-size: 0.5rem;
    }
    .btn {
      font-size: 2rem;
    }
    .project-container {
      grid-template-columns: auto 1fr auto;
    }
  }
  @media screen and (max-width: 600px) {
    margin-left: 2.5rem;
    width: calc(100vw - 2.5rem);
  }
  @media screen and (max-width: 1500px) {
    .project-big {
      display: none;
    }
    .small-project {
      transition: var(--transition);
      grid-template-rows: 1fr 1fr auto;
      row-gap: 1rem;
    }
    .small-project:hover {
      border: 2px solid #cefad0;
    }
    .project-container {
      grid-template-columns: 4rem 1fr 4rem;
    }
  }
`;

export default Wrapper;
