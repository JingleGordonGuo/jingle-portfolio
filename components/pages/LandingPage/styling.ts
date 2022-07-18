import styled from "styled-components";

import { flexCenter } from "../../../styles";

export const LandingPageDiv = styled.div`
  .content {
    max-width: 100vw;
    margin: 0 5vw;

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

  .skillsBox {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }

  .techUsedBox {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }
`;

export const FirstSection = styled.section`
  ${flexCenter}
  .importLine {
    position: absolute;
    top: 0;
  }
`;

export const LastSection = styled.section`
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }
`;
