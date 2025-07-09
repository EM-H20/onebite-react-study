const Viewer = (props) => {
    return (
        <div>
            <div>
                <h2>현재 카운트 : </h2>
            </div>
            <h1>{props.count}</h1>
        </div>
    )
}

export default Viewer
