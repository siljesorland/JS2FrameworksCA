import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../../constants/api";
import React from "react";


function Characters() {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let navigate = useNavigate();

    const { param } = useParams();

    if (!param) {
        navigate.push("/");
    }

    const url = API + "/" + param;

    useEffect(
        function () {
            async function fetchData() {
                try {
                    const response = await fetch(url);

                    if (response.ok) {
                        const json = await response.json();
                        console.log(json);
                        setCharacter(json);
                    } else {
                        setError("An error occured");
                    }
                } catch (error) {
                    setError(error.toString());
                } finally {
                    setLoading(false);
                }
            }
            fetchData();
        },
        [url]
    );

    if (loading) {
        return <div>Loading...</div>;
    }



    if (error) {
        return <div>ERROR: An error occured when calling the API</div>
    }


    return (
        <div className="character-detail">
            <h1>Name: {character.fullName}</h1>
            <h3>Family: {character.family}</h3>
            <img src={character.imageUrl} alt=""></img>
        </div>
    );
}

export default Characters