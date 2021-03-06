import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 60px 1068px 60px;
`;

const OutfitViewPort = styled.div`
  width: 720px;
  height: 280px;
  overflow: hidden;
  grid-column: 2 / 3;
  justify-self:right;
`;

const CardContainer = styled.div`
  display: flex;
  flexDirection: row;
  width: fit-content;
  margin-top: 5px;
`;

const BtnContainerOutfitL = styled.div`
  align-self: center;
  justify-self: right;
  grid-column: 1 / 2;
`;

const BtnContainerOutfitR = styled(BtnContainerOutfitL)`
  grid-column: 3 / 4;
  justify-self: left;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 2em;
  @media (prefers-color-scheme:light){
    color: #344B5B;
  }

  @media (prefers-color-scheme:dark){
    color: white;
  }
  &:focus{
    outline: none;
  }
  &:hover{
    font-size: 3em;
  }
  &:active{
    font-size: 2em;
  }
`;

const AddButtonContainer = styled.div`
  width: 180px;
  height: 250px;
  background: white;
  font-size: 0.8em;
  opacity: 0.6;
  color: white;
  margin-top: 5px;
  justify-self: right;
  grid-column: 1 / 2;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  &:hover{
    box-shadow: 0 8px 13px 0 rgba(0,0,0,0.2);
    transform: scale(1.05, 1.05);
  }
  &:active{
    transform: scale(1, 1);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;
const ButtonWrap = styled.div`
  width: 180px;
  height: 250px;
  display: inline-block;
  position: relative;
`;

const AddButton = styled.a`
  position: absolute;
  opacity: 0.5;
  font-size: 4em;
  bottom: 1.95em;
  left: 1.25em;
  color: #344B5B;
  cursor: default;
`;

const MidCol = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: 265px 750px;
`;

const YourOutfitList = ({currentItem, outfitArray, setOutfitArray}) => {
  const [current, setCurrent] = useState(0);

  const cardContainer = React.useRef();

  useEffect(() => {
    cardContainer.current.style.transitionDuration = '0.5s';
    cardContainer.current.style.transform = `translate(-${240 * current}px)`;
  }, [current]);

  const prevSilde = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const nextSlide = () => {
    if (current < cardContainer.current.children.length - 1) {
      setCurrent(current + 1);
    }
  };

  const addOutFit = (item) => {
    let addedList = [...outfitArray];
    for (let i = 0; i < addedList.length; i++) {
      if (addedList[i].id === item.id) {
        return <p>Product added</p>;
      }
    }
    addedList.unshift(item);
    setOutfitArray(addedList);
  };

  const removeOutFit = (id) => {
    const newList = outfitArray.filter((item) => (item.id !== id));
    if(current > 0) {
      setCurrent(current - 1);
    }
    setOutfitArray(newList);
  };

  return (
    <ListContainer className="list_container">
      <BtnContainerOutfitL>
        {current === 0 ? null : <Button name="prev_btn" type="button" onClick={() => prevSilde()}>&#8249;</Button>}
      </BtnContainerOutfitL>
      <MidCol>
      <AddButtonContainer>
        <ButtonWrap name="add_btn" type="button" onClick={() => addOutFit(currentItem)}>
          <AddButton>&#10133;</AddButton>
        </ButtonWrap>
      </AddButtonContainer>
        <OutfitViewPort className="view-port">
          <CardContainer ref={cardContainer} className="card-container">
            {(outfitArray.length === 0) ? null : (outfitArray.map((product, index) => (
              <div key={index}>
                <ProductCard product={product} removeOutFit={removeOutFit} />
              </div>
            )))}
          </CardContainer>
        </OutfitViewPort>
      </MidCol>
      <BtnContainerOutfitR>
        {current === outfitArray.length - 3 || outfitArray.length - 3 < 0 ? null : <Button name="next_btn" type="button" onClick={() => nextSlide()}>&#8250;</Button>}
      </BtnContainerOutfitR>
    </ListContainer>

  );
};

export default YourOutfitList;
