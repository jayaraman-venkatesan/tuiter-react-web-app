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

    const toggleLike = () => {
        if (tuit.liked === false) {
            dispatch(updateTuitThunk({
                                         ...tuit,
                                         liked: true,
                                         likes: tuit.likes + 1
                                     }))
        } else {
            if (tuit.liked === true) {
                dispatch(updateTuitThunk({
                                             ...tuit,
                                             liked: false,
                                             likes: tuit.likes - 1
                                         }))
            }
        }
    }


    const toggleDislike = () => {
        if (tuit.disliked === false) {
            dispatch(updateTuitThunk({
                                         ...tuit,
                                         disliked: true,
                                         dislikes: tuit.dislikes + 1
                                     }))
        } else {
            if (tuit.disliked === true) {
                dispatch(updateTuitThunk({
                                             ...tuit,
                                             disliked: false,
                                             dislikes: tuit.dislikes - 1
                                         }))
            }
        }
    }

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
            <p onClick={toggleLike} className="wd-icons">
                    {
                        tuit.liked &&
                        <i className="fa-solid fa-heart text-danger"></i>
                    }
                    {
                        !tuit.liked &&
                        <i className="fa-regular fa-heart"></i>
                    }
                    &nbsp;
                   {tuit.likes} 
                </p>
            </div >

            <div className="wd-post-info">
            <p onClick={toggleDislike} className="wd-icons">
                    {
                        tuit.disliked &&
                        <i className="fa-solid fa-thumbs-down"></i>
                    }
                    {
                        !tuit.disliked &&
                        
                        <i className="fa-regular fa-thumbs-down"></i>
                    }
                    &nbsp;
                   {tuit.dislikes} 
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