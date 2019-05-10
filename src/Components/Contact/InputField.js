import React from "react";

function InputField({ setStateValue, name, type, value }) {
  let InputType = "input";

  if (type === "textarea") {
    type = "text";
    InputType = "textarea";
  }

  const label = name;
  name = name.toLowerCase();

  let input = "input";
  let inputFilled = "input input--filled";

  let filled = false;

  if (value.trim() !== "") {
    filled = true;
  }

  return (
    <div className={filled ? inputFilled : input}>
      <InputType
        onChange={e => setStateValue(name, e.target.value)}
        name={name}
        className="input__field input__field--yoko"
        type={type}
        value={value}
      />
      <label
        className="input__label input__label--yoko"
        htmlFor={"message-" + name}
      >
        <span className="input__label-content input__label-content--yoko">
          {label}
        </span>
      </label>
    </div>
  );
}

export default InputField;
