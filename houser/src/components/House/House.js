import React from 'react';

export default function House(props) {
    return (
        <div className="House">House
        {props.houses}
            <button className="btn">Delete</button>
        </div>
    )
}