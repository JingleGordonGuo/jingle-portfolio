import styled from "styled-components";

import { flexCenter } from "../../../styles";

export const LandingPageDiv = styled.div`
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

  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }

  .title,
  .description {
    text-align: center;
  }

  .description {
    margin: 4rem 0;
    line-height: 1.5;
    font-size: 1.5rem;
  }

  .logo {
    height: 1em;
    margin-left: 0.5rem;
  }

  /* @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  } */

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
