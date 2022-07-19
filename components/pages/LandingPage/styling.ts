import styled from "styled-components";

import { flexCenter } from "../../../styles";

export const LandingPageDiv = styled.div`
  .content {
    max-width: 100vw;
    margin: 0 5vw;

    h3,
    h4,
    span,
    a,
    p {
      width: 100%;
    }

    @media (min-width: 1024px) {
      max-width: 800px;
    }
  }

  .footer {
    display: flex;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
  }

  .footer a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  .logo {
    height: 1em;
    margin-left: 0.5rem;
  }

  .NavBox {
    display: flex;
  }

  .skillsBox {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    width: 100%;
  }

  .techUsedBox {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    width: 100%;
  }
`;

export const FirstSection = styled.section`
  ${flexCenter}
  .importLine {
    position: absolute;
    top: 0;
    text-align: center;
    margin-top: 20px;
  }
`;

export const LastSection = styled.section`
  .contactContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }
`;

export const GradientDiv = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    225deg,
    #ffffff 0%,
    #ffebee 10%,
    #f3e5f5 20%,
    #e8eaf6 30%,
    #e1f5fe 40%,
    #e1f5fe 50%,
    #f1f8e9 60%,
    #fffde7 70%,
    #fff3e0 80%,
    #efebe9 90%
  );
`;
