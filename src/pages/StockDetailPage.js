import React from 'react';
import { useParams } from 'react-router-dom';

const StockDetailPage = () => {
  const params = useParams();
  const { symbol } = params;
  return (
    <div>
      detailsPage
      {symbol}
    </div>
  );
};

export default StockDetailPage;
