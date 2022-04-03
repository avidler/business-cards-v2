import React, { useState} from 'react'
import data from "./data.json"


export default function NewMember() {
    const [userdata, setUserData] = useState(data)
    const [username, setUsername] = useState();
    const [userrole, setUserrole] = useState();
    const [userwebsite, setUserwebsite] = useState();
    const [userabout, setUserabout] = useState();
    const [userinterests, setUserinterests] = useState();

    const submitForm = (event) => {
        const newUserData = {username, userrole, userwebsite, userabout, userinterests}
        console.log(userdata, newUserData)

    }
    return (
        <div>
            <h1>Add New Member</h1>
            <form onSubmit={submitForm} className="flex flex-col flex-start">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="role">Role:</label>
                    <input type="text" id="role" name="role" onChange={(e) => setUserrole(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="website">Website:</label>
                    <input type="text" id="website" name="website" onChange={(e) => setUserwebsite(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="about">About:</label>
                    <input type="text" id="about" name="about" onChange={(e) => setUserabout(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="interests">Interests:</label>
                    <input type="text" id="interests" name="interests" onChange={(e) => setUserinterests(e.target.value)}/>
                </div>
                <div>
                    <button type="submit" value="submit">Submit</button>
                </div>
            </form>
        </div>
    )
    }