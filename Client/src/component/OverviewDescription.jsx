import React from 'react';
import styled from 'styled-components';

const Description = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  font-family: 'Roboto', sans-serif;
  padding-top: 20px;
`;
const SloganDesc = styled.div`
  grid-column: 1/2;
  border-right: 2px solid black;
`;
const Bullets = styled.div`
  grid-column: 2/3;
`;
const List = styled.li`
  list-style: '✓';
`;

const OverviewDescription = ({ currentItem }) => {
  const placeholder = '';

  if (currentItem.id !== undefined) {
    const features = () => (
      currentItem.features.map((feature, idx) => (
        <List key={idx}>{feature.feature + feature.value}</List>
      ))
    );

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
