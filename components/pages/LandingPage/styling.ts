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

  .frostedGlassCard {
    ${flexCenter}
    flex-direction: column;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.05);
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(5px);
    padding: 5vw;
    border-radius: 5vw;
    @media (min-width: 640px) {
      padding: 80px;
      border-radius: 20px;
    }
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

export const motionFrostedGlass = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  whileInView: {
    opacity: 1,
    scale: 1,
  },
  // viewport: { once: true },
  exit: { opacity: 0 },
  transition: { duration: 0.5, type: "spring" },
};
