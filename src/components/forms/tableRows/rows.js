import React from 'react';

export default function Rows(props) {
    const range = n => [...Array(n).keys()]
    const halfUnits = props.halfUnits;
    const yearOfStudy = props.yearOfStudy;
    const hfuLabel = <label>Half Unit</label>
    if (halfUnits === 0) {
        var normalRows = range(4).map((number) =>
        <tr>
            <td>{number + 1}</td>
            <td><input type="number" name={yearOfStudy} min="0" max="100"/></td>
        </tr>
        );
    }
    else {
        normalRows = range(4 - halfUnits).map((number) =>
        <tr>
            <td>{number + 1}</td>
            <td><input type="number" name={yearOfStudy} min="0" max="100"/></td>
        </tr>
        );

        var hfuRows = range(halfUnits*2).map((number) =>
        <tr>
            <td>{number === 0 || number%2 === 0 ? 1 : 2}</td>
            <td><input type="number" name={yearOfStudy} min="0" max="100"/></td>
        </tr>
        )
    }
    return (
        <tbody>
            {normalRows}
            {halfUnits !== 0 ? hfuLabel : null}
            {hfuRows}
        </tbody>
    );
}