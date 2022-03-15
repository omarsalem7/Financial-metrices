import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMetrices } from './redux/stock/stock';
import StocksPage from './pages/StocksPage';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMetrices());
  }, []);

  return (
    <div className="App">
      <Header />
      <StocksPage />
    </div>
  );
}

export default App;
