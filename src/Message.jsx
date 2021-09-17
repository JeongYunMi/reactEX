import React from "react";
import styled from "styled-components";

const Message = () => {
  return <MessageWrap>투표되었습니다.</MessageWrap>;
};
export default Message;

const MessageWrap = styled.div`
  position: fixed;
  top: 0;
  right: 48%;
  padding: 8px 16px;
  border: solid 1px black;
  border-radius: 8px;
  background-color: white;
`;
