import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function callSetAns(event: React.ChangeEvent<HTMLInputElement>): void {
        setAnswer(event.target.value);
    }

    return (
        <FormGroup>
            <FormLabel>Check Answer Component</FormLabel>
            <FormControl value={answer} onChange={callSetAns} placeholder="Type your answer here:"/>
            {answer === expectedAnswer && <span>✔️</span>}
            {answer !== expectedAnswer && <span>❌</span>}
        </FormGroup>
    );
}
