import React from 'react';
import Player from './Player';

const PlayerList = ({ player }) => {
    console.log("I am in PlayerList", player);

    return (
        <ul>
            {player.map((player) => (
                <Player player={player} key={player.id} />
            ))}
        </ul>
    );
};

export default PlayerList;
