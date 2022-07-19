import { motion } from "framer-motion";
import styled from "styled-components";

import { fullScreen } from "../../styles";

const LoadingScreenDiv = styled(motion.div)`
  ${fullScreen}
  background-color: white;
  z-index: 1000;
`;

const motionOpacity = {
  initial: {},
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1 },
};

const LoadingScreen = () => {
  return <LoadingScreenDiv {...motionOpacity}></LoadingScreenDiv>;
};

export default LoadingScreen;
