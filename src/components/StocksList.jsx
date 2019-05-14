import React from 'react';
import { Detector } from "react-detect-offline";
import StockRow from './StockRow.jsx';

const StocksList = (props) => {
  return (
    <div className='card column' id='stocks_list'>
      <div className='card-header'>
        <div className='card-header-title'>
          Stocks
          &nbsp;
          <Detector
            render={({ online }) => (
              <span className={online ? "tag is-success" : "tag is-danger"}>
                {online ? "Online" : "Offline"}
              </span>
            )}
          />
          &nbsp;
          <button className='button is-small' onClick={props.resetData}>Reset</button>
        </div>
      </div>
      <div className='card-content'>
        <table className='table is-bordered'>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>
                Price
              </th>
              <th>Last Update</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(props.stocks).map((stock_name, index) =>
              {
                let current_stock = props.stocks[stock_name];
                return (
                  <StockRow
                    key={index} stock_name={stock_name}
                    stock_data={current_stock}
                    toggleStockSelection={props.toggleStockSelection}
                  />
                )
              }
            )}
            { props.areStocksLoaded() ? null : <tr><td colSpan='3'>Loading Stocks...</td></tr> }
          </tbody>
        </table>
       </div>
    </div>
  );
}

export default StocksList;
