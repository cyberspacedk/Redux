import axios from 'axios';


const getCurrencyRate = (data)=>({
  type: "EXCHANGERATE",
  data: data,
})

const URL_API='https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'

const getRate = ()=> axios.get(URL_API);
 
const getCurrencyRateAction = ()=> dispatch=> {
  getRate().then(data=> dispatch(getCurrencyRate(data)))

} 
export default getCurrencyRateAction;