import React from "react";

function InputField({ setStateValue, name, type, value }) {
  let InputType = "input";

  if (type === "textarea") {
    type = "text";
    InputType = "textarea";
  }

  const label = name;
  name = name.toLowerCase();

  return (
    <div className="input">
      <InputType
        onChange={e => setStateValue(name, e.target.value)}
        name={name}
        className="input__field input__field--yoko"
        type={type}
        value={value}
      />
      <label
        class="input__label input__label--yoko"
        htmlFor={"message-" + name}
      >
        <span class="input__label-content input__label-content--yoko">
          {label}
        </span>
      </label>
    </div>
  );
}

export default InputField;
