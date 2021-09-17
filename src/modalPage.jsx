import React from "react";
import styled from "styled-components";

const modalPage = ({ onClicVoting, imgSrc, vote, title, closeModal }) => {
  return (
    <Wrapper>
      <HeadModal>
        <Title>modal</Title>
        <CloseButton onClick={closeModal}>X</CloseButton>
      </HeadModal>
      <ContentWrap>
        <CherryBImg src={imgSrc} />
        <ContentDetail>
          {title} : {vote}
        </ContentDetail>
      </ContentWrap>
      <VotingButton onClick={onClicVoting}>투표하기</VotingButton>
    </Wrapper>
  );
};

export default modalPage;

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  margin: 5% 40%;
  background-color: #fefefe;
  border: solid 1px black;
`;

const HeadModal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffd5dd;
`;

const Title = styled.div`
  margin-left: 8px;
  font-size: 24px;
`;

const CloseButton = styled.button``;

const ContentWrap = styled.div``;

const CherryBImg = styled.img`
  width: 400px;
  height: auto;
`;

const ContentDetail = styled.div`
  text-align: center;
`;

const VotingButton = styled.button``;
