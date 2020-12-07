import React from "react";
import "./Button.css";

const Button = (
  {children, startIcon, endIcon, variant, disabled, disableShadow, size, color }
) => {
  if (disabled) {
    return (
      <button disabled className={`${variant} disabled ${size} ${color}`}>
        {startIcon && <i class="material-icons">{startIcon}</i>}
        {children}
        {endIcon && <i class="material-icons">{endIcon}</i>}
      </button>
    );
  }
  return (
    <button
      className={`${variant} ${
        disableShadow && "disableShadow"
      } ${size} ${color}`}
    >
      {startIcon && <i class="material-icons">{startIcon}</i>}
      {children}

      {endIcon && <i class="material-icons">{endIcon}</i>}
    </button>
  );
};

export default Button;
