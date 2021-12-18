import React from "react";

const TagCard = ({ label }) => {
    return <div className={"tag-card " + label}>{label}</div>;
};

export default TagCard;
