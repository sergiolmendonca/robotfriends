import React from "react";
import { Scrollbar } from 'react-scrollbars-custom';

const Scroll = (props) => {
    return (
        <Scrollbar style={{ height: 700 }}>
            {props.children}
        </Scrollbar>
    );
};

export default Scroll;