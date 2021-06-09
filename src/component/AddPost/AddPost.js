import React from "react";

export default (show) => {

    const getDisplayClass = () => {
        let display = 'display=';

        if (show) {
            display += "\"none\"";
        } else {
            display += "\"inline\"";
        }

        return display;
    }

    return (
        <div style={getDisplayClass()}>

        </div>);
}