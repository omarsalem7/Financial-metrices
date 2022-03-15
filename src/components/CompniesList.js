/*eslint-disable*/
import React from 'react';
import { useSelector } from 'react-redux';
import Company from './Company';
import Spinner from './Spinner';
import '../style/companiesList.css';
import ErrorPage from '../pages/ErrorPage';

const CompniesList = () => {
  const companies = useSelector((state) => state.stockReducer);
  const { loading, error } = companies;
  return (
    <>
      {error ? (
        <ErrorPage />
      ) : loading ? (
        <Spinner />
      ) : (
        <div className="companies-list">
          {companies.data.map(
            ({ symbol, name, change, price, changesPercentage }) => (
              <Company
                key={symbol}
                symbol={symbol}
                name={name}
                change={change}
                price={price}
                changesPercentage={changesPercentage}
              />
            ),
          )}
        </div>
      )}
    </>
  );
};

export default CompniesList;
