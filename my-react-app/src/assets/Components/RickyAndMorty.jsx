import { useEffect, useState } from "react";

export const RickAndMorty = () => {
    const [characters, setCharacters] = useState([]);

    const handlerFetchCharacters = async () => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            setCharacters(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handlerFetchCharacters();
    }, []);

    return (
        <>
            {characters.map((character) => (
                <div key={character.id}>
                    <img src={character.image} alt={character.name} />
                    <h2>{character.name}</h2>
                    <p>{character.gender}</p>

                </div>
            ))}

            {/* {characters.length ?  <p>s</p> : <p>Loading data</p>} */}
        </>
    );
};
