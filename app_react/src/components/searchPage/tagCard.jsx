import React from "react";
import "./styles/tagCard.css";

const testImage = "tag-test.jpg";

const TagCard = ({ label }) => {
    return <div className={"tag-card " + label}>{label}</div>;
};

export default TagCard;
