import React, { Fragment } from "react";

const ListFooter = props => (
    <Fragment>
        <p>{props.date}</p>
        <p>R$ {props.total}</p>
    </Fragment>
);

export default ListFooter;
