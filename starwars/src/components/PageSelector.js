import React from 'react';

import './StarWars.css';

function PageSelector (props) {
    return (
        <div className="page-selectors">
            <button className="page-button" onClick={props.prevClickHandler}>Previos</button>
            <button className="page-button" onClick={props.nextClickHandler}>Next</button>
        </div>
    );
}

export default PageSelector;