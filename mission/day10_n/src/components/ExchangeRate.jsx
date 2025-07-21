import CurrencyInput from "./CurrencyInput";
import { useState } from "react";
const EXCHANGE_RATE = 1300;

const ExchangeRate = () => {
    const [state, setState] = useState({
        krw: 0,
        usd: 0,
    });

    const onChangeRate = (currency, value) => {
        if(currency === "krw") {
            setState({
                krw: value,
                usd: value / EXCHANGE_RATE,
            });
        } else {
            setState({
                krw: value * EXCHANGE_RATE,
                usd: value,
            });
        }
    };

    return (
        <div>
            <h1>환율 변환기 (KRW-USD)</h1>
            <CurrencyInput currency="krw" value={state.krw} onChange={onChangeRate}/>
            <CurrencyInput currency="usd" value={state.usd} onChange={onChangeRate}/>
        </div>
    );  
};

export default ExchangeRate;
