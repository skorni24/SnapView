import React from "react";

import './MainHeader.css';

const MainHeader = (props) => {
    return (
        <header className="main-header">
             {props.children}  {/* This is a special prop that every component receives automatically. It's used to render the content that's wrapped by the opening and closing tag of the custom component.  */}
        </header>
    );
 };

export default MainHeader;  