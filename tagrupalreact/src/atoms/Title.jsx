import React from "react";

const Title = ({ text, level = 1 }) => {
    const Tag = `h${level}`;
    return <Tag className="title">{text}</Tag>;
};


export default Title;