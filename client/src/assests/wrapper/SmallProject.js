import styled from "styled-components";

const Wrapper = styled.div`
  display: none;
  min-height: 30rem;
  min-width: 20rem;
  max-width: 25rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: var(--dark-shadow);
  padding: 2rem;
  .title {
    display: grid;
    place-items: center;
    text-align: center;
    font-size: 3rem;
  }

  .icon {
    font-size: 3rem;
    display: grid;
    justify-self: center;
    padding: 1rem;
  }
  .hidden {
    display: none;
  }

  @media screen and (max-width: 1500px) {
    display: grid;
    min-width: 35rem;
  }
  @media screen and (max-width: 800px) {
    display: grid;
    min-width: 20rem;
  }
`;

export default Wrapper;
