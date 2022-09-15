import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

// THIS IS A PRESENTATIONAL/STATELESS/"DUMB" COMPONENT BC IT IS JUST HERE TO OUTPUT SOME DATA.

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">${props.amount}</p>
      </div>
    </Card>
  );
}

export default ExpenseItem;