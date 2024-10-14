import React from 'react';
import PropTypes from 'prop-types';
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

Form.propTypes = {
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            onChange: PropTypes.func.isRequired
        })
    ).isRequired,
    onSubmit: PropTypes.func.isRequired,
    buttonLabel: PropTypes.string.isRequired
};


export default Form;
