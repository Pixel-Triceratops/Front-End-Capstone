import React from 'react';
import styled from 'styled-components';

const Description = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  font-family: 'Roboto', sans-serif;
  padding-top: 20px;
  @media (prefers-color-scheme:light){
  background-color: #D8E2E9;}
  @media (prefers-color-scheme:dark){
    background-color: #60606C;}
`;
const SloganDesc = styled.div`
  grid-column: 1/2;
  border-right: 2px solid black;
  padding-left: 10px;
`;
const List = styled.li`
  list-style: '✓';
`;

const OverviewDescription = ({ currentItem }) => {
  if (currentItem.id !== undefined) {
    const features = () => (
      currentItem.features.map((feature, idx) => (
        feature.value !== null
          ? <List key={idx}>{`${feature.feature} ${feature.value}`}</List>
          : <List key={idx}>{`${feature.feature}`}</List>
      ))
    );
    console.log(currentItem);
    return (
      <Description>
        <SloganDesc>
          <span className="slogan"><strong>{currentItem.slogan}</strong></span>
          <p className="description">{currentItem.description}</p>
        </SloganDesc>
        <ul className="features">
          {features()}
        </ul>
      </Description>
    );
  }
  return 'something';
};

export default OverviewDescription;
