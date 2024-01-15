import React from "react";

function WordClass(props) {
    console.log("PROPS", props);
    
    return (
        <div className="flex">
            <h2>{props.class}</h2>
            <hr />
        </div>
    );
}

export default WordClass;
