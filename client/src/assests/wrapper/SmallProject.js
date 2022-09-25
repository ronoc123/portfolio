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
