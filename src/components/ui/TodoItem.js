import React from "react";
import CheckBox from "./CheckBox";

export default function TodoItem(props) {
    const { data, changeStatus, removeItem } = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const handleRemove = () => removeItem(data.id);
    const className =
        "todo-item ui-state-default " +
        (data.completed === true ? "completed" : "pending");

    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox
                        checked={data.completed}
                        onChange={handleChange}
                    />{" "}
                    {data.text}
                </label>
                <div className="pull-right buttons">
                    {/* <span class="glyphicon glyphicon-remove"> X </span> */}
                    <a
                        title="Remove"
                        className={"button remove"}
                        onClick={handleRemove}
                    ></a>
                </div>
            </div>
        </li>
    );
}
