import React, { useState, useEffect } from "react";

function Counter({ initialValue, onChange }) {
    const [count, setCount] = useState(initialValue || 1);

    useEffect(() => {
        onChange(count);
    }, [count, onChange]);

    const incrementCount = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    };

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const clearCount = () => {
        setCount(1);
    };

    return (
        <div>
            <input
                className="form-control border-3 border-primary rounded"
                style={{ width: "250px", height: "31px" }}
                type="number"
                readOnly
                value={count}
            />
            <br />
            <button style={{ marginRight: "15px" }} className="btn btn-primary" type="button" onClick={decrementCount}>-</button>
            <button className="btn btn-primary" type="button" onClick={clearCount}>Clear</button>
            <button style={{ margin: "15px" }} className="btn btn-primary" type="button" onClick={incrementCount}>+</button>
        </div>
    );
}

export default Counter;
