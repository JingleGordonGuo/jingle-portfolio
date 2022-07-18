import Image from "next/image";

import styled from "styled-components";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const StyledNavButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 12px;
`;

const NavBtn = ({ elementId }: { elementId: string }) => {
  const handleScroll = () => document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
  return (
    <StyledNavButton onClick={handleScroll}>
      <Image width={40} height={40} src={`/iconsNav/${elementId}.png`} />
      <span>{capitalizeFirstLetter(elementId)}</span>
    </StyledNavButton>
  );
};

export default NavBtn;
