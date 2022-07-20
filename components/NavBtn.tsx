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
  width: 80px;
  height: 80px;
  border-radius: 12px;
  span {
    padding-top: 4px;
  }
`;

const NavBtn = ({ elementId }: { elementId: string }) => {
  return (
    <StyledNavButton onClick={() => scrollTo(elementId)}>
      <Image width={36} height={36} src={`/iconsNav/${elementId}.png`} />
      <span>{capitalizeFirstLetter(elementId)}</span>
    </StyledNavButton>
  );
};

export default NavBtn;
