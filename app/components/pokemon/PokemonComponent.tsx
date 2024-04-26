import React, { useEffect, useState } from 'react';

const PokemonComponent = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            .then(response => response.json())
            .then(data => {
                const promises = data.results.map(pokemon => 
                    fetch(pokemon.url).then(res => res.json())
                );
                Promise.all(promises).then(pokemonDetails => {
                    // Enrich the data with the first move and its learn method
                    const enhancedPokemonDetails = pokemonDetails.map(pokemon => {
                        const firstMove = pokemon.moves[0]?.move.name || "No move";
                        const firstMoveMethod = pokemon.moves[0]?.version_group_details[0]?.move_learn_method.name || "No method";
                        return { ...pokemon, firstMove, firstMoveMethod };
                    });
                    setPokemonData(enhancedPokemonDetails);
                });
            })
            .catch(error => console.error("Error fetching data: ", error));
    }, []);

    const handleSearchChange = (event) => {
        setFilter(event.target.value.toLowerCase());
    };

    const filteredPokemon = pokemonData.filter(pokemon => 
        pokemon.name.toLowerCase().includes(filter)
    );

    return (
        <div className="container mx-auto p-4">
            <input
                type="text"
                placeholder="Search Pokemon"
                value={filter}
                onChange={handleSearchChange}
                className="mb-4 p-2 border-2 border-gray-800 shadow-md rounded w-full max-w-xs"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredPokemon.map((pokemon, index) => (
                    <div key={index} className="p-4 border-2 border-gray-800 shadow-md rounded flex flex-col justify-between">
                        <img src={pokemon.sprites.other['dream_world'].front_default} alt={pokemon.name} className="w-full mb-2" />
                        <p className="text-lg font-bold">Name: {pokemon.name}</p>
                        <p className="text-lg">First Move: {pokemon.firstMove}</p>
                        <p className="text-lg">Learn Method: {pokemon.firstMoveMethod}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonComponent;
