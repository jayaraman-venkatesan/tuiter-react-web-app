import React from "react";
import { useSelector } from "react-redux";
import './index.css'
import TuitItem from "./tuit-item";

const TuitList = () => {
    const tuits = useSelector(
        (state) => state.tuits);
    return (
        <>
            <h2>Home</h2>
            {tuits.map(tuit =>
                <TuitItem tuit={tuit} />
            )}
        </>
    );
};

export default TuitList;