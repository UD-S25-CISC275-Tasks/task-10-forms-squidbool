import React, { useState } from "react";
import { FormCheck } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("Green");

    function changeColor(event: React.ChangeEvent<HTMLInputElement>): void {
        setColor(event.target.value);
    }

    return (
        <div>
            <FormCheck
                inline
                type="radio"
                label={<span style={{backgroundColor: "Green"}}>Green</span>}
                value="Green"
                checked={color === "Green"}
                onChange={changeColor}
            />
            <FormCheck
                inline
                type="radio"
                label={<span style={{backgroundColor: "Red"}}>Red</span>}
                value="Red"
                checked={color === "Red"}
                onChange={changeColor}
            />
            <FormCheck
                inline
                type="radio"
                label={<span style={{backgroundColor: "Blue"}}>Blue</span>}
                value="Blue"
                checked={color === "Blue"}
                onChange={changeColor}
            />
            <FormCheck
                inline
                type="radio"
                label={<span style={{backgroundColor: "Yellow"}}>Yellow</span>}
                value="Yellow"
                checked={color === "Yellow"}
                onChange={changeColor}
            />
            <FormCheck
                inline
                type="radio"
                label={<span style={{backgroundColor: "Orange"}}>Orange</span>}
                value="Orange"
                checked={color === "Orange"}
                onChange={changeColor}
            />
            <FormCheck
                inline
                type="radio"
                label={<span style={{backgroundColor: "Cyan"}}>Cyan</span>}
                value="Cyan"
                checked={color === "Cyan"}
                onChange={changeColor}
            />
            <FormCheck
                inline
                type="radio"
                label={<span style={{backgroundColor: "Pink"}}>Pink</span>}
                value="Pink"
                checked={color === "Pink"}
                onChange={changeColor}
            />
            <FormCheck
                inline
                type="radio"
                label={<span style={{backgroundColor: "Lavender"}}>Lavender</span>}
                value="Lavender"
                checked={color === "Lavender"}
                onChange={changeColor}
            />
            You have chosen <span data-testid="colored-box" style= {{backgroundColor: color, padding: 10}}>{color}</span>.
        </div>
    );
}
