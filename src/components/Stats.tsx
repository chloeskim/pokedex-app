import React from 'react';
import styled from '@emotion/styled';
import { type Stat, type Color } from './../types/index';
import { mapColorToHex } from './../utils';

const Base = styled.div`
  margin-top: 32px;
  padding: 0 20px 20px;
`;

const Title = styled.h4<{ color: string }>`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({ color }) => color};
`;

const List = styled.ul`
  margin: 20px 0 0 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  & + & {
    margin-top: 12px;
  }
`;

const Name = styled.div`
  grid-column: span 4 / span 4;
  color: #374151;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 12px;
`;

const Amount = styled.div`
  grid-column: span 1 / span 1;
  font-size: 12px;
  color: #374151;
`;

const GaugeWrapper = styled.div`
  grid-column: span 7 / span 7;
  border-radius: 12px;
  background-color: #e5e7eb;
`;

const Gauge = styled.div<{ percentage: number; color: string }>`
  background-color: ${({ color }) => color};
  width: ${({ percentage }) => `${percentage}%`};
  height: 100%;
  border-radius: 12px;
`;

interface Props {
  stats: Stat[];
  color: Color;
}

// TODO: API
const Stats: React.FC<Props> = ({ color, stats }) => {
  return (
    <Base>
      <Title color={mapColorToHex(color?.name)}>Base Stats</Title>
      <List>
        <ListItem>
          <Name>Name</Name>
          <Amount>Amount</Amount>
          <GaugeWrapper>
            <Gauge color={mapColorToHex(color?.name)} />
          </GaugeWrapper>
        </ListItem>
      </List>
    </Base>
  );
};

export default Stats;
