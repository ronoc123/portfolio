import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  margin-left: 15rem;
  height: 100%;
  min-height: 100vh;
  width: calc(100vw - 15rem);
  background: var(--clr-primary-6);

  .about-container {
    /* border: 2px solid red; */
    width: 90%;
    display: grid;
    column-gap: 4rem;
    grid-template-columns: 2fr 3fr;
    justify-self: center;
    place-items: center;
  }
  .ring {
    width: 32rem;
    height: 40rem;
    background: white;
    border-radius: 50%;
    box-shadow: var(--dark-shadow);
    justify-self: end;
  }
  .info {
  }
  .socials {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .text {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 2rem;
  }
  .heading {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 3rem;
  }
  .logo {
    font-size: 3rem;
    justify-self: end;
  }
  .logo2 {
    justify-self: start;
  }
  .links {
    display: grid;
    place-items: center;
  }

  .link {
    border: 2px solid var(--clr-primary-5);
    color: var(--clr-primary-5);
    padding: 0.8rem;
    font-size: 1.3rem;
    font-weight: 600;
    border-radius: 0.5rem;
  }

  .picture {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
  }

  .name {
    font-size: 3.5rem;
    color: var(--clr-primary-4);
  }
  .clr {
    color: var(--clr-primary-5);
  }
  .ring {
  }

  @media screen and (max-width: 1400px) {
    .ring {
      height: 30rem;
      width: 25rem;
    }
    .info {
      width: 90%;
    }
  }

  @media screen and (max-width: 1100px) {
    .about-container {
      grid-template-columns: 1fr;
    }
    .big-screen {
      display: none;
    }
  }

  @media screen and (max-width: 900px) {
    margin-left: 5rem;
    width: calc(100vw - 5rem);
    .text {
      font-size: 1.5rem;
    }
    .heading {
      font-size: 2rem;
    }
    .name {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 600px) {
    margin-left: 2.5rem;
    width: calc(100vw - 2.5rem);
  }
`;

export default Wrapper;
