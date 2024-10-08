import React from "react";
import Title from "../atoms/Title";
import Form from "../molecules/Form";
import "../styles/organisms/FormSection.css";

const FormSection = ({ title, fields, buttonLabel, onSubmit }) => {
    return (
        <section className="form-section">
            <Title text={title} level={2} />
            <Form fields={fields} buttonLabel={buttonLabel} onSubmit={onSubmit} />
        </section>
    );
};

export default FormSection;
