import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { scrollTo } from "../../scripts/scrollTo";
import { flexCenter } from "../../styles";

const ShortcutsDiv = styled(motion.div)`
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

const motionOpacity = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

interface IProps {
  mainRef: React.RefObject<HTMLDivElement>;
}
const Shortcuts = ({ mainRef }: IProps) => {
  const [viewPortHeight, setViewPortHeight] = useState(1000);
  const [show, setShow] = useState(false);

  const onScroll = () => {
    if (!mainRef.current) return;
    if (mainRef.current.scrollTop > viewPortHeight) return setShow(true);
    setShow(false);
  };
  const onResize = () => {
    setViewPortHeight(window.innerHeight);
    onScroll();
  };

  useEffect(() => {
    setViewPortHeight(window.innerHeight);
    mainRef.current?.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      mainRef.current?.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [mainRef]);

  return (
    <AnimatePresence>
      {show && (
        <ShortcutsDiv {...motionOpacity}>
          {/* <button>
            <Image src="/iconsNav/menu.svg" width={30} height={30} />
          </button> */}
          <button onClick={() => scrollTo("landing")}>
            <Image src="/iconsNav/up.svg" width={30} height={30} />
          </button>
        </ShortcutsDiv>
      )}
    </AnimatePresence>
  );
};

export default Shortcuts;
