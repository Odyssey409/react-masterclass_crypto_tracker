import { useQuery } from "react-query";
import { styled } from "styled-components";
import { fetchCoinTickers } from "../api";

const Table = styled.table`
  background: white;
  border-radius: 3px;
  border-collapse: collapse;
  height: 320px;
  margin: auto;
  max-width: 600px;
  padding: 5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
  th:first-child {
    border-top-left-radius: 3px;
  }

  th:last-child {
    border-top-right-radius: 3px;
    border-right: none;
  }

  tr {
    border-top: 1px solid #c1c3d1;
    border-bottom-: 1px solid #c1c3d1;
    color: #666b85;
    font-size: 16px;
    font-weight: normal;
    text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
  }

  tr:hover td {
    background: #4e5066;
    color: #ffffff;
    border-top: 1px solid #22262e;
  }

  tr:first-child {
    border-top: none;
  }

  tr:last-child {
    border-bottom: none;
  }

  tr:nth-child(odd) td {
    background: #ebebeb;
  }

  tr:nth-child(odd):hover td {
    background: #4e5066;
  }

  td {
    background: #ffffff;
    padding: 20px;
    text-align: left;
    vertical-align: middle;
    font-weight: 300;
    font-size: 18px;
    text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
    border-right: 1px solid #c1c3d1;
  }
`;

interface ChartProps {
  coinId: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading Chart...."
      ) : (
        <Table>
          <tbody>
            <tr>
              <td>All Time High Price</td>
              <td>${data?.quotes.USD.ath_price.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Current Price</td>
              <td>${data?.quotes.USD.price.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Percent Change 1Hour</td>
              <td>{data?.quotes.USD.percent_change_1h.toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Percent Change 1Day</td>
              <td>{data?.quotes.USD.percent_change_24h.toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Percent Change 1Month</td>
              <td>{data?.quotes.USD.percent_change_30d.toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Percent Change 1Year</td>
              <td>{data?.quotes.USD.percent_change_1y.toFixed(2)}%</td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default Price;
