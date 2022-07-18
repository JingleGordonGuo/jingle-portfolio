import Image from "next/image";

import styled from "styled-components";

import { flexCenter } from "../../styles";

const LabelledIconsDiv = styled.div`
  ${flexCenter}
  flex-direction: column;
  .imageBox {
    ${flexCenter}
    width: 30px;
    height: 30px;
  }
`;

interface IProps {
  img: string;
  label: string;
  width?: number;
  height?: number;
  subtle?: boolean;
}
const LabelledIcons = ({ img, label, width = 30, height = 30, subtle }: IProps) => {
  return (
    <LabelledIconsDiv>
      <div className="imageBox">
        <Image src={img} {...{ width, height }} />
      </div>
      <span>{label}</span>
    </LabelledIconsDiv>
  );
};

interface IIconProps {
  subtle?: boolean;
}

export const IconAWS = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/aws.svg" label="Amazon Web Service" subtle={subtle} />;
};

export const IconCSS = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/css.svg" label="CSS" subtle={subtle} />;
};

export const IconFirebase = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/firebase.svg" label="Firebase" subtle={subtle} />;
};

export const IconFramerMotion = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/framer_motion.png" label="Framer Motion" subtle={subtle} />;
};

export const IconFramer = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/framer.svg" label="Framer" subtle={subtle} />;
};

export const IconGitHub = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/github.svg" label="GitHub" subtle={subtle} />;
};

export const IconHowlerjs = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/howlerjs.png" label="Howler.js" subtle={subtle} />;
};

export const IconHtml = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/html.svg" label="HTML" subtle={subtle} />;
};

export const IconIllustrator = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/illustrator.png" label="Adobe Illustrator" subtle={subtle} />;
};

export const IconIndesign = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/indesign.png" label="Adobe Indesign" subtle={subtle} />;
};

export const IconJavascript = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/javascript.svg" label="JavaScript" subtle={subtle} />;
};

export const IconNextJS = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/nextjs.svg" label="Next.js" subtle={subtle} />;
};

export const IconPhotoshop = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/photoshop.png" label="Adobe Photoshop" subtle={subtle} />;
};

export const IconPython = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/python.png" label="Python" subtle={subtle} />;
};

export const IconReactQuery = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/react_query.png" label="React Query" subtle={subtle} />;
};

export const IconReact = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/react.svg" label="React" subtle={subtle} />;
};

export const IconRedux = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/redux.svg" label="Redux" subtle={subtle} />;
};

export const IconSass = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/sass.svg" label="SCSS" subtle={subtle} />;
};

export const IconStyledComponent = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/styled_components.png" label="Styled Components" subtle={subtle} />;
};

export const IconTypeScript = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/typescript.svg" label="TypeScript" subtle={subtle} />;
};

export const IconVercel = ({ subtle }: IIconProps) => {
  return <LabelledIcons img="/iconsTech/vercel.svg" label="Vercel" subtle={subtle} />;
};

export default LabelledIcons;
