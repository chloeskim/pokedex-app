// Detail view of selected Pokemon
import React from 'react';
import { useParams } from 'react-router-dom';

type Params = {
  id: string;
};

const DetailPage: React.FC = () => {
  const { id } = useParams<Params>();
  return <div>Detail Page id: {id}</div>;
};

export default DetailPage;
