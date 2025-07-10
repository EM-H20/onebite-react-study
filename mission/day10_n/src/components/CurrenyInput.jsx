const CurrenyInput = (props) => {
    return (
        <div>
            <input type="number" placeholder="0" onChange={props.onChangeRate}/>
            <input type="number" placeholder="0" value={props.value}/>

        </div>
    );
};

export default CurrenyInput;