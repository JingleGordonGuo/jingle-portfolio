import styled from "styled-components";

import CopyBtn from "../CopyBtn";

const IContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  .optionBoxes {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .optionBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0;
    width: 300px;

    .optionText {
      display: flex;
      flex-direction: column;
    }
  }

  .title {
    color: #757575;
    font-weight: 600;
  }
`;

const ContactOptions = () => {
  return (
    <IContactOptions>
      <h2>Contact</h2>
      <div className="optionBoxes">
        <div className="optionBox">
          <div className="optionText">
            <span className="title">LinkedIn</span>
            <a href="https://www.linkedin.com/in/jingle-guo/" target="_blank" rel="noreferrer">
              linkedin.com/in/jingle-guo/
            </a>
          </div>
        </div>
        <div className="optionBox">
          <div className="optionText">
            <span className="title">Discord</span>
            <span>Jingle#3750</span>
          </div>
          <CopyBtn text={"Jingle#3750"} />
        </div>
        <div className="optionBox">
          <div className="optionText">
            <span className="title">Email</span>
            <span>me@jingle.dev</span>
          </div>
          <CopyBtn text={"me@jingle.dev"} />
        </div>
      </div>
    </IContactOptions>
  );
};

export default ContactOptions;
