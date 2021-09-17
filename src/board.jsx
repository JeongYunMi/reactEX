import React from "react";
import styled from "styled-components";

const Board = ({ title, imgSrc, onClicModalOpen }) => {
  return (
    <BoardWrap onClick={onClicModalOpen}>
      <BoardImg src={imgSrc} alt={title} />
      <BoardTitle>{title} 자세히보기</BoardTitle>
    </BoardWrap>
  );
};
export default Board;

const BoardWrap = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  border: solid 1px gray;
  margin: 24px;
`;

const BoardImg = styled.img`
  background-color: orange;
  width: 160px;
  height: 120px;
  object-fit: cover;
`;

const BoardTitle = styled.div`
  text-align: center;
`;
