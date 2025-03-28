import React, { useState } from "react";
import { FormCheck, FormControl, FormGroup, FormLabel } from "react-bootstrap";

interface User {
    name: string;
    isStudent: boolean;
}


export function EditMode(): React.JSX.Element {
    const [editMode, setEdit] = useState<boolean>(false);
    const [userInfo, setInfo] = useState<User>({name: "Your Name", isStudent: true});

    function turnOnEdit(): void {
        setEdit(!editMode);
    }

    function editUserName(event: React.ChangeEvent<HTMLInputElement>): void {
        let editedUser: User = {name: event.target.value, isStudent: userInfo.isStudent};
        setInfo(editedUser);
    }

    function editIsStudent(): void {
        let editedUser: User = {name: userInfo.name, isStudent: !userInfo.isStudent};
        setInfo(editedUser);
    }

    return (
        <div>
            <FormCheck type="switch" label="Edit User" checked={editMode} onChange={turnOnEdit}/>
            {!editMode  ? <span>{userInfo.name} {userInfo.isStudent ? "is a student" : "is not a student"}</span> : 
                <FormGroup>
                    <FormControl value={userInfo.name} placeholder="Enter user's name here:" onChange={editUserName}/> 
                    <FormCheck type="checkbox" id="is-student" label="User is a student?" checked={userInfo.isStudent} onChange={editIsStudent}/>
                </FormGroup>
            }
        </div>
    );
}