import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateTuitThunk } from "../../services/tuits-thunks";
const TuitStats = (
    {
        tuit
    }
) => {
    const dispatch = useDispatch()

    return (
        <div className="wd-G_container">
            <div className="wd-post-info">
                <p className="wd-icons">
                    <a href="#" className="wd-link">
                        <i className="fa-regular fa-comment"></i>
                        <p className="wd-numbers">{tuit.replies}</p>
                    </a>
                </p>
            </div>
            <div className="wd-post-info">
                <p className="wd-icons">
                    <a href="#" className="wd-link">
                        <i className="fa-solid fa-retweet"></i>
                        <p className="wd-numbers">{tuit.retuits}</p>
                    </a>
                </p>
            </div>
            <div className="wd-post-info">
                <p className="wd-icons">
                    
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes + 1
                    }))} className="bi bi-heart-fill me-2 text-danger"></i> {tuit.likes}
                </p>
            </div >

            <div className="wd-post-info">
                <p className="wd-icons">
                    
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        dislikes: tuit.dislikes + 1
                    }))} className="fa-sharp fa-solid fa-thumbs-down text-danger"></i> {tuit.dislikes}
                </p>
            </div >

            <div className="wd-post-info">
                <p className="wd-icons">
                    <a href="#" className="wd-link">
                        <i className="fa-solid fa-share-nodes"></i>
                    </a>
                </p>
            </div>
        </div >
    );
};
export default TuitStats;