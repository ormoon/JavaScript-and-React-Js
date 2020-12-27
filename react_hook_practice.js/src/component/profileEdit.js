import React from 'react'
import {useParams} from 'react-router-dom';

export default function ProfileEdit() {
    let params = useParams();
    return (
        <div>
            <h1>Edit your profile</h1>
            <p>userId : {params.id}</p>
        </div>
    )
}
