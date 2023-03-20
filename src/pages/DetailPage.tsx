// Detail view of selected Pokemon
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Tabs from '../components/Tabs';

interface Params {
  id: string;
}

type Tab = 'about' | 'stats' | 'evolution';

const DetailPage: React.FC = () => {
  const { id } = useParams<Params | any>();
  const [selectedTab, setSelectedTab] = useState<Tab>('about');
  const handleClick = (tab: Tab) => {
    setSelectedTab(tab);
  };
  return (
    <div>
      <Tabs tab={selectedTab} onClick={handleClick} />
    </div>
  );
};

export default DetailPage;
