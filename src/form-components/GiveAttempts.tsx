import React, { useState } from "react";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [numInput, setInput] = useState<number>(0);

    function checkValidNum(event: React.ChangeEvent<HTMLInputElement>): void {
        let num: number = parseInt(event.target.value);
        if (!Number.isNaN(num)) {
            setInput(num);
        } else {
            setInput(0);
        }
    }

    function addAttempts(): void {
        setAttempts(attempts + numInput);
    }

    function useAttempts(): void {
        setAttempts(attempts - 1);
    }

    return (
    
        <FormGroup>
            <FormLabel>Give Attempts</FormLabel>
            <FormControl type="number" placeholder="Input Attempts:" onChange={checkValidNum}/>
            <Button onClick={useAttempts} disabled={attempts === 0}>use</Button>
            <Button onClick={addAttempts}>gain</Button>
            <span>Attempts left: {attempts}</span>
        </FormGroup>
    
    );
}
