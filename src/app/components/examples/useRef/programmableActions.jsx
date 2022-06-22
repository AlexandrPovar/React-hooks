import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "150px";
        inputRef.current.style.height = "80px";
        inputRef.current.type = "text";
        console.log(inputRef.current.type);
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-labe">
                Email:
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary m-3 mx-0" onClick={handleClick}>
                Focus input
            </button>
            <button className="btn btn-success m-3 " onClick={handleClickWidth}>
                change button style
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
