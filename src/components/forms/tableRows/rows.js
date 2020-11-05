import React from 'react';

export default function Rows(props) {
    const range = n => [...Array(n).keys()]
    const halfUnits = props.halfUnits;
    let tableRows;
    if (halfUnits === 0) {
        tableRows = range(4).map((number) =>
        <tr>
            <td>{number + 1}</td>
            <td><input type="number"/></td>
        </tr>
        );
    }
    else {
        tableRows = range(halfUnits + 4).map((number) =>
        <tr>
            <td>{number + 1}</td>
            <td><input type="number"/></td>
        </tr>
        );
    }
    return (
        <tbody>{tableRows}</tbody>
    );
}