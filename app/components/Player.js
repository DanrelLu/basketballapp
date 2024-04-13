import React from "react";

const Post = ({ player }) => {
    console.log("I am in Player", player);

    return (
        <li className="p-3 my-5 bg-slate-300" key={player.id}>
            <h1>{player.name}</h1>
            <p>{player.team}</p>
            <p>MPG: {player.MPG}</p>
            <p>PPG: {player.PPG}</p>
            <p>RPG: {player.RPG}</p>
            <p>APG: {player.APG}</p>
            <p>SPG: {player.SPG}</p>
            <p>BPG: {player.BPG}</p>
        </li>
    );
};

export default Post;
