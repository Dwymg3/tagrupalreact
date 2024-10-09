import React from "react";
import "../styles/atoms/Title.css";

const Title = ({ text, level }) => {
    const Tag = `h${level}`;
    return <Tag className={`title title--level-${level}`}>{text}</Tag>;
};

export default Title;
