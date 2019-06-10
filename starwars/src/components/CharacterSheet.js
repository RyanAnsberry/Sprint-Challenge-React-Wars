import React from 'react';

function CharacterSheet (props) {
    return (
        <div className="character-sheet">
            <h3 className="char-name-heading">{props.name}</h3>
            <div className="info-section">
                <div className="info-segment">
                    <p>Hair Color: {props.hariColor}</p>
                    <p>Mass: {props.mass}</p>
                </div>
                <div className="info-segment">
                    <p>Gender: {props.gender}</p>
                    <p>Height: {props.height}</p>
                </div>
                <div className="info-segment">
                    <p>Eye Color: {props.eyeColor}</p>
                    <p>Birth Year: {props.birthYear}</p>
                </div>
            </div>
        </div>
    );
}

export default CharacterSheet;