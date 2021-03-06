﻿import React from "react";

import { faShoppingBasket, faCheck } from "@fortawesome/free-solid-svg-icons";

import CustomCard from "../common/CustomCard";
import ListFooter from "./ListFooter";
import ListItem from "./ListItem";
import "./List.scss";

const List = props => (
    <CustomCard
        containerClass="list-container df"
        footer={<ListFooter total={props.total} date={props.date} />}
        link="/lista/edicao"
        cardClass={props.openedItems < 1 ? "closed-list" : "open-list"}
    >
        <div>
            <p className="title">{props.list}</p>
            <div className="list-card-body">
                <ListItem
                    icon={faShoppingBasket}
                    text={`${props.openedItems} Item(s) restantes`}
                />
                <ListItem
                    icon={faCheck}
                    text={`${props.closedItems} Item(s) comprados`}
                />
            </div>
        </div>
    </CustomCard>
);

export default List;
