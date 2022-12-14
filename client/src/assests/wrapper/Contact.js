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
    /* place-items: center; */
    padding-top: 2rem;
    padding-bottom: 2rem;
    height: 50%;
    min-height: 24rem;
    max-width: 60rem;
    width: 90%;
    justify-content: center;
    background: white;
    box-shadow: var(--dark-shadow);
    border-radius: 0.5rem;
    grid-template-columns: 1fr;
    /* grid-template-rows: 1fr 1fr 3fr 1fr; */
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
    resize: none;
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
    margin-left: 5rem;
    width: calc(100vw - 5rem);
  }
  @media screen and (max-width: 600px) {
    margin-left: 2.5rem;
    width: calc(100vw - 2.5rem);
    .email-input {
      height: 40%;
      font-size: 1rem;
    }
    .text-input {
      font-size: 0.9rem;
    }
  }
`;

export default Wrapper;
