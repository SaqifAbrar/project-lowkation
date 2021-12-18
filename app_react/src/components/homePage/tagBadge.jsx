import React from "react";
import "./styles/tagBadge.css";

const TagBadge = ({ tag }) => {
    //console.log(tagId);
    return (
        <div className="tag-badge">
            <p>{tag}</p>
        </div>
    );
};

export default TagBadge;
