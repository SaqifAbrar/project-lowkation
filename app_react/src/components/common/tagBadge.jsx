import React from "react";
import "./tagBadge.css";

const TagBadge = ({ tag }) => {
    //console.log(tagId);
    return (
        <div className="tag-badge">
            <p>{tag}</p>
        </div>
    );
};

export default TagBadge;
