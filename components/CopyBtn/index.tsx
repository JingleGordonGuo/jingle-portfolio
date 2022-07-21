import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

import { neumorphic } from "../../styles";

const StyledCopyBtn = styled.button`
  ${neumorphic}
  overflow: hidden;
  width: 80px;
  height: 36px;
  font-weight: 600;
  border-radius: 12px;
`;

const MotionSlideUp = {
  initial: { y: "200%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "-200%", opacity: 0 },
  transition: { duration: 0.15 },
};

interface IProps {
  text: string;
}
const CopyBtn = ({ text }: IProps) => {
  const [copied, setCopied] = useState(false);

  return (
    <StyledCopyBtn
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
      }}
    >
      <AnimatePresence exitBeforeEnter>
        {copied && (
          <motion.div {...MotionSlideUp} key="copied">
            Copied
          </motion.div>
        )}
        {!copied && (
          <motion.div {...MotionSlideUp} key="copy">
            Copy
          </motion.div>
        )}
      </AnimatePresence>
    </StyledCopyBtn>
  );
};

export default CopyBtn;
