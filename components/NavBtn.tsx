import Image from "next/image";

import styled from "styled-components";

import { scrollTo } from "../scripts/scrollTo";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const StyledNavButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 74px;
  height: 60px;
  border-radius: 12px;
  @media (min-width: 640px) {
    width: 80px;
    margin: 0 1vw;
  }

  .imgBox {
    position: relative;
    width: 30px;
    height: 30px;
    @media (min-width: 640px) {
      width: 36px;
      height: 36px;
    }
  }

  span {
    padding-top: 4px;
    font-weight: 600;
    font-size: 12px;
    @media (min-width: 640px) {
      font-size: 12px;
    }
  }
`;

const NavBtn = ({ elementId }: { elementId: string }) => {
  return (
    <StyledNavButton onClick={() => scrollTo(elementId)}>
      <div className="imgBox">
        {/* <Image src={`/iconsNav/${elementId}.png`} layout="fill" alt={elementId} /> */}
        <img src={`/iconsNav/${elementId}.png`} style={{ width: "100%", height: "100%" }} alt={elementId} />
      </div>
      <span>{capitalizeFirstLetter(elementId)}</span>
    </StyledNavButton>
  );
};

export default NavBtn;
