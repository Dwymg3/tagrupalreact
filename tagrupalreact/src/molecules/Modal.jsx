import React, { useEffect } from "react";
import "../styles/molecules/Modal.css";

const Modal = ({
    handleClose,
    show,
    children,
    size = "medium",
    color = "white",
    closeOnOutsideClick = true,
    showCloseButton = true
}) => {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [handleClose]);

    if (!show) return null;

    const handleOverlayClick = (e) => {
        if (closeOnOutsideClick && e.target === e.currentTarget) {
            handleClose();
        }
    };

    const modalSizeClass = `modal--${size}`;
    const modalColorClass = `modal--${color}`;

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className={`modal-content ${modalSizeClass} ${modalColorClass}`}>
                {showCloseButton && (
                    <button className="modal-close" onClick={handleClose}>Cerrar</button>
                )}
                {children}
            </div>
        </div>
    );
};

export default Modal;
