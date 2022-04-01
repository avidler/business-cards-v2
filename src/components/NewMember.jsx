import React from 'react'

export default function NewMember() {

    return (
        <div>
            <h1>Add New Member</h1>
            <form class="flex flex-col flex-start">
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label for="role">Role:</label>
                    <input type="text" id="role" name="role" />
                </div>
                <div>
                    <label for="website">Website:</label>
                    <input type="text" id="website" name="website" />
                </div>
                <div>
                    <label for="about">About:</label>
                    <input type="text" id="about" name="about" />
                </div>
                <div>
                    <label for="interests">Interests:</label>
                    <input type="text" id="interests" name="interests" />
                </div>
            </form>
        </div>
    )
    }