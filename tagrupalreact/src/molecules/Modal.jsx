import React from "react";

const Modal = ({
    hadleClose,
    show,
    children,
    size = "medium",
    color = "white",
    closeOnOutsideClick = true,
    showCloseButton = true
}) => {
    useEffect(() => {
        const hadleEscape = (e) => {
            if (e.key === "Escape") {
                hadleClose();
            }
        };
        document.addEventListener("keydown", hadleEscape);
        return () => {
            document.removeEventListener("keydown", hadleEscape);
        };
    }, [hadleClose]);

    if (!show) return null;

    const handleClose = (e) => {
        if (closeOnOutsideClick && e.target === e.currentTarget) {
            hadleClose();
        }
    };

    const modalSizeClass = `modal--${size}`;
    const modalColorClass = `modal--${color}`;

    return (
        <div className="modal-overlay" onClick={handleClose}>
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