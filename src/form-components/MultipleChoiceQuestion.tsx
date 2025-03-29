import React, { useState } from "react";
import { FormLabel, FormSelect } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    function changeAnswer(event: React.ChangeEvent<HTMLSelectElement>): void {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <FormLabel>Multiple Choice Question Component</FormLabel>
            <FormSelect value={answer} onChange={changeAnswer}>
                {options.map((option: string) => <option key={option} value={option}>{option}</option>)}
            </FormSelect>
            {answer === expectedAnswer && <span>✔️</span>}
            {answer !== expectedAnswer && <span>❌</span>}
        </div>
    );
}
