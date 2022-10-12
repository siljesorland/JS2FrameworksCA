import { useState, useEffect } from "react";
import { API } from "../../constants/api";
import CharacterItem from "../../components/characters/CharacterItem";

function Characters() {

    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(function () {
        async function fetchData() {
            try {
                const response = await fetch(API);

                if (response.ok) {
                    const json = await response.json();
                    console.log(json);
                    setCharacters(json);
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
    }, []);


    if (loading) {
        return <div>Loading....</div>
    }

    if (error) {
        return <div>ERROR: An error occured when calling the API</div>
    }


    return (
        <div className="characters">
            {characters.map(function (character) {
                const { id, fullName, title, firstName } = character;
                return <CharacterItem key={id} id={id} fullName={fullName} title={title} firstName={firstName} />;
            })}

        </div>
    );
}

export default Characters