import styled from "styled-components";

const Wrapper = styled.div`
  display: none;
  /* min-height: 30rem;
  min-width: 20rem; */
  max-width: 25rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: var(--dark-shadow);
  padding: 2rem;

  .title {
    font-size: 2rem;
    justify-self: end;
    margin-right: 1.5rem;
    display: grid;
    place-content: center;
  }
  .head {
    display: flex;
    justify-content: center;
  }

  .icon {
    display: grid;
    place-content: center;
    font-size: 3rem;
  }
  .hidden {
    display: none;
  }

  .orange {
    color: #ff781f;
  }
  .green {
    color: #00ab41;
  }

  @media screen and (max-width: 1100px) {
    display: grid;
    width: 100%;
    .text {
      margin-bottom: 2rem;
    }
    .btn-container {
      padding: 0.5rem;
    }
    text-align: center;
  }
  @media screen and (max-width: 900px) {
    display: grid;
    font-size: 0.9em;
    max-width: 100%;

    .title {
      font-size: 1rem;
    }
    .icon {
      font-size: 1.5rem;
    }
  }
`;

export default Wrapper;
