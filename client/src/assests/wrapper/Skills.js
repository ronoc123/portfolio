import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-left: 15rem;
  min-height: 100vh;
  width: calc(100vw - 15rem);
  background: var(--clr-primary-6);
  .main-container {
    display: grid;
    width: 70%;
    justify-self: center;
    grid-template-columns: 1fr;
    grid-template-rows: 10rem 2.5rem 18rem 4rem 8rem auto;
    margin-bottom: 2rem;
    /* min-height: 40rem; */
    height: 100%;
  }
  .title {
    text-align: center;
    place-self: center;
    font-size: 3rem;
  }

  .skills-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    row-gap: 1rem;
    padding: 2rem;
  }
  .education-container {
    display: grid;
    grid-template-columns: 1fr;
    padding-left: 4rem;
    li {
      padding-left: 1rem;
    }
  }
  .skills-title {
    padding-left: 2rem;
    font-size: 2rem;
  }
  .education-title {
    padding-left: 2rem;
    font-size: 2rem;
  }
  .resume-link {
    display: grid;
    place-items: center;
  }
  .download-btn {
    background: var(--clr-primary-5);
    border: none;
    color: white;
    font-size: 1.5rem;
    padding: 1.5rem;
    cursor: pointer;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }
  .icon {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    place-items: center;
    background: #323330;
    color: white;
    align-self: flex-start;
    width: 8rem;
    border-radius: 1rem;
    box-shadow: var(--dark-shadow);
    height: 6rem;
    padding: 1rem;
  }
  .icon-size {
    font-size: 2rem;
    align-self: flex-end;
  }
  .text {
    align-self: start;
  }
  .javascript {
    color: #f0db4f;
  }
  .react {
    color: #61dbfb;
  }
  .html {
    color: #e34c26;
  }
  .css {
    color: #264de4;
  }
  .node {
    color: #68a063;
  }
  .postgresql {
    color: #0064a5;
  }
  .express {
    color: #f0db4f;
  }
  .mongodb {
    color: #4db33d;
  }
  .c {
    color: #9b4993;
  }
  .asp {
    color: #ff0000;
  }
  .mvc {
    color: #4db33d;
  }
  .ssms {
    color: #a24857;
  }

  @media screen and (max-width: 1500px) {
    .skills-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .main-container {
      grid-template-rows: 7rem 2.5rem 3fr 4rem 2fr auto;
    }
  }
  @media screen and (max-width: 1200px) {
    .skills-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 1rem;
    }
    .main-container {
      /* grid-template-rows: 7rem 2.5rem 3fr 4rem 2fr auto; */
      grid-template-rows: 7rem 3rem 1fr 3rem 10rem 10rem;
    }
  }

  @media screen and (max-width: 900px) {
    margin-left: 5rem;
    width: calc(100vw - 5rem);
  }
  @media screen and (max-width: 600px) {
    margin-left: 2.5rem;
    width: calc(100vw - 2.5rem);
    .main-container {
      width: 90%;
    }
    .education-container {
      padding-left: 1rem;
    }
    .icon {
      height: 4rem;
      width: 6.5rem;
    }
    .icon-size {
      font-size: 1rem;
    }
    .skills-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 1rem;
    }
  }
`;

export default Wrapper;
