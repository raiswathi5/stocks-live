import React from 'react';
import TimeAgo from 'react-timeago';

class StockRow extends React.Component {

  getStockValueColor = (stock) =>{
    if(stock.current_value < stock.history.slice(-2)[0].value){
      return 'bg-red';
    }
    else if(stock.current_value > stock.history.slice(-2)[0].value){
      return 'bg-green';
    }
    else{
      return null;
    }
  }

  render() {
    let history = this.props.stock_data.history;
    return (
      <tr>
        <td>{this.props.stock_name.toUpperCase()}</td>
        <td className={this.getStockValueColor(this.props.stock_data)}>
          {this.props.stock_data.current_value.toFixed(2)}
        </td>
        <td className='updated_at'>
          <TimeAgo date={ history.slice(-1)[0].time } />
        </td>
      </tr>
    );
  }
}

export default StockRow;