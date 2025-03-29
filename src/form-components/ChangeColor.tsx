import React, { useState } from "react";
import { FormCheck, FormLabel } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const COLORS: string[] = ["Green", "Red", "Blue", "Yellow", "Orange", "Cyan", "Pink", "Lavender"];
    const [selColor, setColor] = useState<string>("Green");

    function changeColor(event: React.ChangeEvent<HTMLInputElement>): void {
        setColor(event.target.value);
    }

    return (
        <div>
            <FormLabel style={{padding: 10}}>Change Color Component</FormLabel>
            {COLORS.map((color: string)=>
                <FormCheck
                inline
                type="radio"
                label={<span style={{backgroundColor: color}}>{color}</span>}
                key={color}
                value={color}
                checked={selColor === color}
                onChange={changeColor}
                />
            )}
            
            You have chosen <span data-testid="colored-box" style= {{backgroundColor: selColor, padding: 10}}>{selColor}</span>.
        </div>
    );
}
