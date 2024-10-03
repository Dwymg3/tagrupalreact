import React from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Button from "../atoms/Button";

const Form = ({ fields, onSubmit, buttonLabel }) => {
    return(
        <form className="form" onSubmit={onSubmit}>
            {fields.map((field, index) => (
                <div className="form-group" key={index}>
                    <Label htmlFor={field.id}>{field.label}</Label>
                    <Input 
                        type={field.type}
                        value={field.value}
                        onChange={field.onChange}
                        placeholder={field.placeholder}
                        name={field.name}
                    />
                </div>
            ))}
            <Button label={buttonLabel} type="submit"/>
        </form>
    );
};

export default Form;