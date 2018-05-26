import React from 'react';

export default function House (props) {
    return (
        <div className="House">
            <h2>House</h2>
            {props.houses}
            <button className="btn">Delete</button>
        </div>
    )
}