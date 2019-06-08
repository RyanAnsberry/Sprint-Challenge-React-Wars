import React from 'react';

import CharacterSheet from './CharacterSheet.js';
import './StarWars.css';

function CharacterList(props) {
    return (
        <div className="character-list">
            {props.starwarsChars.map((char, index) => {
                return (
                    <CharacterSheet
                        name={char.name}
                        mass={char.mass}
                        hairColor={char.hair_color}
                        gender={char.gender}
                        height={char.height}
                        eyeColor={char.eye_color}
                        birthYear={char.birth_year}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

export default CharacterList;