import React from "react";
import { connect } from "react-redux";
import convertAction from "../../Redux/Actions/convertAction";
import countMoneyAction from '../../Redux/Actions/countMoneyAction';

const Converter = props => {
  const { currency, convert ,countMoney,countInput, converted} = props;

  return (
    <div className="converter-box">
      <ul className="converter-list">
        {currency.map(el => (
          <li key={el.ccy}>
            <p data-name={el.ccy} data-buy={el.buy} onClick={(evt)=>convert(evt,countInput)}>
              {el.ccy}
            </p>
          </li>
        ))}
      </ul>
      
      <div className="control-box">
        <span className="give">GIVE</span>

        <input type="number" name="countmoney"  onChange={countMoney}/>

        <span className="get">GET</span>
        <span className="result">{converted ? converted.toFixed(2) : 0} <span className="sm">UAH</span> </span>
      </div>
     


    </div>
  );
};
 
const mstp = state => ({
  currency: state.currencyrate,
  countInput: state.countMoney, 
  converted : state.converted,
});

const mdtp = dispatch => ({
  convert: (evt,inpurValue) => dispatch(convertAction(evt,inpurValue)),
  countMoney: evt => dispatch(countMoneyAction(evt)),
});

export default connect(
  mstp,
  mdtp
)(Converter);
