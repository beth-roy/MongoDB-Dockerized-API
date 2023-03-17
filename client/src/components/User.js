import AddUser from "./AddUser";
import UserDisplay from "./UserDisplay";
import sampleUsers from "../assets/userSample.json";
import { useEffect, useState } from "react";


export default function User() {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        setAllUsers(sampleUsers);
    }, [])

    const addUserToList = (user) => {

        setAllUsers([...allUsers, user]);
    }
    return (
        <div>
            <AddUser addUserToList={addUserToList} /><br />

        </div>
    )
}