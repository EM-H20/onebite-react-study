import CurrenyInput from "./CurrenyInput";
import { useState } from "react";
const EXCHANGE_RATE = 1300;

const ExchangeRate = () => {
    const [krw, setKrw] = useState(0);
    const [usd, setUsd] = useState(0);

    const onChangeRate = (e) => {
        const value = e.target.value;
        setKrw(value);
        setUsd(value / EXCHANGE_RATE);
    };

    return (
        <div>
            <h1>환율 변환기 (KRW-USD)</h1>
            <CurrenyInput onChangeRate={onChangeRate}/>
        </div>
    );  
};

export default ExchangeRate;
