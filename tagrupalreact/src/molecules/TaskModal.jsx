import React from 'react';
import '../styles/molecules/TaskModal.css';

const TaskModal = ({ isOpen, onClose, fields, onSubmit }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Agregar Tarea</h2>
                <form onSubmit={onSubmit}>
                    {fields.map(field => (
                        <div key={field.id} className="form-group">
                            <label htmlFor={field.id}>{field.label}</label>
                            <input
                                type={field.type}
                                id={field.id}
                                value={field.value}
                                onChange={field.onChange}
                                required
                            />
                        </div>
                    ))}
                    <div className="modal-buttons">
                        <button type="submit">Guardar</button>
                        <button type="button" onClick={onClose}>Cerrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskModal;
