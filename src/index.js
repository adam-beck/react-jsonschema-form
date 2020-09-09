import React from "react";
import ReactDOM from "react-dom";
import Form from "@rjsf/core";

const schema = {
  type: "boolean",
  default: true,
};

const uiSchema = {
  "ui:widget": "checkbox",
};

const CustomCheckbox = function (props) {
  return (
    <button
      id="custom"
      className={props.value ? "checked" : "unchecked"}
      onClick={() => props.onChange(!props.value)}
    >
      {String(props.value)}!
    </button>
  );
};

const Memoed = React.memo(CustomCheckbox);

const widgets = {
  CheckboxWidget: Memoed,
};

ReactDOM.render(
  <Form schema={schema} uiSchema={uiSchema} widgets={widgets} />,
  document.getElementById("root")
);
