import React from "react";
import TagCard from "./tagCard";
import "./styles/tagTable.css";

const TagTable = ({ categories, label }) => {
    return (
        <div className="tag-table-container">
            {/*<p className="row-label">{label}</p>*/}
            <div className="tag-table-wrapper">
                {categories.map((category) => {
                    return (
                        <TagCard
                            key={Math.random(50000) + Date.now()}
                            label={category}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default TagTable;

// if tag state is empty, then you will render this
// map tagCards here and onClick will raise the setTag hook
// when onClick is success, this won't be rendered anymore because tag state is not empty
