import React, {useCallback } from "react";

import "./Track.css";

const Track = (props) => {

    const addTrack = useCallback((event) => {
        props.onAdd(props.track);
    }, [props.onAdd, props.track])

    const removeTrack = useCallback((event) => {
        props.onRemove(props.track);
    }, [props.onRemove, props.track])

    const actionButton = () => {
        if (props.isRemoval) {
            return (
                <button className="TrackAction" onClick={removeTrack}>Remove</button>
            );
        }
        return (
            <button className="TrackAction" onClick={addTrack}>Add</button>
        );
    };

    return (
        <div className="TrackEntry">
            <div className="TrackInfo">
                <h3 className="Track">{props.title} | {props.artist}</h3>
            </div>
            {actionButton()}
        </div>
    );
};

export default Track;