import styled from "styled-components";
import { useState, useEffect } from "react";
import Board from "./board";
import ModalPage from "./modalPage";
import Message from "./Message";

function App() {
  const [newModal, setNewModal] = useState(0);
  const [newMessage, setNewMessage] = useState(false);
  const [itemList, setItemList] = useState([
    {
      id: 1,
      title: "벚꽃1",
      imgSrc:
        "https://cdn.pixabay.com/photo/2016/02/27/06/43/cherry-blossom-tree-1225186_960_720.jpg",
      vote: 0,
    },
    {
      id: 2,
      title: "벚꽃2",
      imgSrc:
        "https://cdn.pixabay.com/photo/2017/05/18/06/31/spring-2322682_960_720.jpg",
      vote: 0,
    },
    {
      id: 3,
      title: "벚꽃3",
      imgSrc:
        "https://cdn.pixabay.com/photo/2020/03/20/20/00/cherry-blossoms-4951853_960_720.jpg",
      vote: 0,
    },
    {
      id: 4,
      title: "벚꽃4",
      imgSrc:
        "https://cdn.pixabay.com/photo/2021/03/10/10/51/cherry-blossom-6084249_960_720.jpg",
      vote: 0,
    },
    {
      id: 5,
      title: "벚꽃5",
      imgSrc:
        "https://cdn.pixabay.com/photo/2020/02/06/19/28/cherry-blossoms-4825302_960_720.jpg",
      vote: 0,
    },
    {
      id: 6,
      title: "벚꽃6",
      imgSrc:
        "https://cdn.pixabay.com/photo/2017/04/01/09/17/japanese-cherry-trees-2193226_960_720.jpg",
      vote: 0,
    },
  ]);

  useEffect(() => {
    console.log("newwww:", itemList);
  }, []);

  const onClicModalOpen = (id) => {
    console.log(id);
    setNewModal(id);
  };
  const onClicModalClose = () => {
    setNewModal(0);
  };

  const onClicVoting = (id) => {
    let temp = itemList;
    temp[id].vote = temp[id].vote + 1;
    showMessage();
    setItemList(temp);
    setNewModal(0);
    setTimeout(showMessage, 2500);
  };

  const showMessage = () => {
    setNewMessage((prev) => !prev);
  };

  return (
    <MainWrapper className="App">
      <BoardWrap>
        {itemList.map(({ id, title, vote, imgSrc }) => (
          <Board
            key={id}
            title={title}
            imgSrc={imgSrc}
            vote={vote}
            onClicModalOpen={onClicModalOpen.bind(this, id)}
          />
        ))}
      </BoardWrap>
      {newModal ? (
        <ModalPage
          imgSrc={itemList[newModal - 1].imgSrc}
          key={itemList[newModal - 1].id}
          vote={itemList[newModal - 1].vote}
          title={itemList[newModal - 1].title}
          closeModal={onClicModalClose}
          onClicVoting={onClicVoting.bind(this, newModal - 1)}
          showMessage={showMessage}
        />
      ) : (
        <div></div>
      )}
      {newMessage ? <Message /> : <div></div>}
    </MainWrapper>
  );
}

export default App;

const MainWrapper = styled.div``;

const BoardWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
