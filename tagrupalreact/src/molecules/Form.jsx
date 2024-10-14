import React from 'react';
import '../styles/molecules/Form.css';

const Form = ({ fields, onSubmit, buttonLabel }) => {
    return (
        <form onSubmit={onSubmit}>
            {fields.map(field => (
                <div key={field.id}>
                    <label htmlFor={field.id}>{field.label}</label>
                    <input
                        id={field.id}
                        type={field.type}
                        value={field.value}
                        onChange={field.onChange}
                        required
                    />
                </div>
            ))}
            <button type="submit">{buttonLabel}</button>
        </form>
    );
};


export default Form;
