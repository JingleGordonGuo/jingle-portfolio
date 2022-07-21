import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const StyledCopyBtn = styled.button`
  overflow: hidden;
  width: 80px;
  height: 36px;
  font-weight: 600;
  border-radius: 12px;
  background: linear-gradient(145deg, #ffffff, #cccccc);
  box-shadow: 4px 4px 10px #bebebe, -4px -4px 10px #ffffff;
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
