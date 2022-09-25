import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  margin-left: 15rem;
  height: 100%;
  min-height: 100vh;
  width: calc(100vw - 15rem);
  background: var(--clr-primary-6);
  place-items: center;

  .form-container {
    display: grid;
    padding-top: 2rem;
    padding-bottom: 2rem;
    /* border: 2px solid red; */
    height: 60vh;
    width: 50vw;
    min-height: 25rem;
    min-width: 20rem;
    justify-content: center;
    background: white;
    box-shadow: var(--dark-shadow);
    border-radius: 0.5rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 3fr 1fr;
  }
  .title {
    text-align: center;
  }

  .text-input {
    height: 10rem;
    width: 60%;
    font-size: 1.1rem;
    padding-left: 0.2rem;
    justify-self: center;
  }

  .email-input {
    height: 3rem;
    width: 60%;
    justify-self: center;
    font-size: 1.6rem;
    padding-left: 0.2rem;
  }

  .submit-btn {
    background: none;
    border: none;
    color: white;
    background: var(--clr-primary-5);
    cursor: pointer;
    height: 3rem;
    width: 60%;
    font-size: 1.5rem;
    justify-self: center;
  }

  @media screen and (max-width: 900px) {
    margin-left: 2rem;
    width: calc(100vw - 2rem);
  }
`;

export default Wrapper;
