import React from 'react';
import {connect} from 'react-redux';

const CurrencyList = (props) => {



const {currencyrate} = props;
  
  return (
    <table className="table">
      <thead className="table-head">
        <tr>
          <td>CURRENCY</td>
          <td>BID</td>
          <td>ASK</td>
        </tr>
      </thead>
      <tbody className="table-body">
        {currencyrate.map((elem,idx) => ( 
          <tr key={idx}>
            <td>{elem.ccy}</td>
            <td>{elem.buy}</td>
            <td>{elem.sale}</td>
          </tr> 
        ))}
      </tbody>
    </table>
  )
}
{/* 

ccy: "USD",
base_ccy: "UAH",
buy: "27.10000",
sale: "27.40000"
*/}
const mstp = (state) => ({
  currencyrate : state.currencyrate, 
})

export default connect(mstp,null)(CurrencyList);
