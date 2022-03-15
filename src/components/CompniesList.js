import React from 'react';
import { useSelector } from 'react-redux';
import Company from './Company';
import '../style/companiesList.css';

const CompniesList = () => {
  const companies = useSelector((state) => state.stockReducer.data);
  console.log('stock', companies);
  return (
    <div className="companies-list">
      {companies.map(({
        symbol, name, change, price, changesPercentage,
      }) => (
        <Company
          key={symbol}
          symbol={symbol}
          name={name}
          change={change}
          price={price}
          changesPercentage={changesPercentage}
        />
      ))}
    </div>
  );
};

export default CompniesList;
