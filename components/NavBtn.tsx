import Image from "next/image";

import styled from "styled-components";

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
  const handleScroll = () => document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
  return (
    <StyledNavButton onClick={handleScroll}>
      <Image width={36} height={36} src={`/iconsNav/${elementId}.png`} />
      <span>{capitalizeFirstLetter(elementId)}</span>
    </StyledNavButton>
  );
};

export default NavBtn;
