import React from 'react';

const StocksLoaderStatus = props => {
  if(props.connectionError) {
    return (
      <div className='is-medium'>
        <span className='has-text-danger'>Data unavailable at the moment. Please check the market timings and try again later.</span>
      </div>
    );
  } else {
    return (
      <div className='tag is-large is-success'>
        <span className='loader'> &nbsp;</span>
        &nbsp; Loading stock data...
      </div>
    );
  }
}

export default StocksLoaderStatus;