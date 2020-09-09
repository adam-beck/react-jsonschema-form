import React from "react";
import Form from "react-jsonschema-form";

import { render } from "react-dom";

const schema = {
  type: "boolean",
  default: true,
};

const uiSchema = {
  "ui:widget": "checkbox",
};

const CustomCheckbox = function(props) {
  return (
    <button
      id="custom"
      className={props.value ? "checked" : "unchecked"}
      onClick={() => props.onChange(!props.value)}>
      {String(props.value)}!
    </button>
  );
};

const Memoed = React.memo(CustomCheckbox);

const widgets = {
  CheckboxWidget: Memoed,
};

render(
  <Form schema={schema} uiSchema={uiSchema} widgets={widgets} />,
  document.getElementById("app")
);
