import React from 'react';

export const SearchResults = (props) => {
    let results = props.results;
    if (results.length <= 0) {
        return <div>Nothing found</div>;
    } else {
        return (
            <ul>
                {results.map(function (game, i) {
                    return <li key={i}>{game.name}</li>;
                })}
            </ul>
        );
    }

};