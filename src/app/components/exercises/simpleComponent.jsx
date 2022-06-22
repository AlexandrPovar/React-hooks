import React from "react";
import PropTypes from "prop-types";

const simpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {isAuth ? (
                <button className="btn btn-danger" onClick={onLogOut}>
                    Выйти из системы
                </button>
            ) : (
                <button className="btn btn-primary" onClick={onLogin}>
                    Войти
                </button>
            )}
        </>
    );
};
simpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};
export default simpleComponent;
