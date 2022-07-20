import Image from "next/image";

import styled from "styled-components";

import { scrollTo } from "../../scripts/scrollTo";
import { flexCenter } from "../../styles";

const ShortcutsDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  margin: 30px;
  z-index: 10;

  button {
    ${flexCenter}
    width: 40px;
    height: 40px;
    margin-bottom: 12px;
    border-radius: 10px;
    background: linear-gradient(145deg, #ffffff, #cccccc);
    box-shadow: 4px 4px 10px #bebebe, -4px -4px 10px #ffffff;
  }
`;

const Shortcuts = () => {
  return (
    <ShortcutsDiv>
      <button>
        <Image src="/iconsNav/menu.svg" width={30} height={30} />
      </button>
      <button onClick={() => scrollTo("landing")}>
        <Image src="/iconsNav/up.svg" width={30} height={30} />
      </button>
    </ShortcutsDiv>
  );
};

export default Shortcuts;
