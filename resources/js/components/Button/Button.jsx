import React from "react";
import styles from "./Button.module.scss";

export default function Button({ label, className, type, onClick }) {
    return (
        <button
            className={`${styles["custom-button"]} ${className}`}
            type={type}
            onClick={onClick}
        >
            {label}
        </button>
    );
}
